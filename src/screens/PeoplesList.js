import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text, RefreshControl, Dimensions } from 'react-native';
import { fetchUsers } from '../logic/api';
import ProfileSnippet from '../components/ProfileSnippet';
import SearchHeader from '../components/SearchHeader';
import LoadingView from '../components/LoadingView';

const { width } = Dimensions.get('window');

const PeoplesList = ({ navigation }) => {
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setIsRefreshing(true);
      }
      const data = await fetchUsers();
      setPeople(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch the directory. Please try again.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredPeople = useMemo(() => {
    return people.filter(person => {
      const matchName = person.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchEmail = person.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchName || matchEmail;
    });
  }, [people, searchQuery]);

  const handleProfilePress = (person) => {
    navigation.navigate('PersonDetails', { person, personName: person.name });
  };

  const renderEmptyState = () => {
    if (isLoading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No matching profiles found.</Text>
      </View>
    );
  };

  if (isLoading && !isRefreshing) {
    return <LoadingView message="Loading directory..." />;
  }

  if (error && people.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchHeader value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filteredPeople}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProfileSnippet item={item} onPress={() => handleProfilePress(item)} />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => loadData(true)}
            colors={['#007AFF']}
            tintColor="#007AFF"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listContent: {
    paddingVertical: 12,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
  },
});

export default PeoplesList;
