import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Mail, Phone, Building, Globe, MapPin } from 'lucide-react-native';

const PersonDetails = ({ route }) => {
  const { person } = route.params;

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${person.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${person.phone}`);
  };

  const handleWebsitePress = () => {
    const url = person.website.startsWith('http') ? person.website : `https://${person.website}`;
    Linking.openURL(url);
  };

  const formattedAddress = `${person.address.street}, ${person.address.suite}\n${person.address.city}, ${person.address.zipcode}`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.avatarLarge}>
          <Text style={styles.avatarLargeText}>{person.name.charAt(0)}</Text>
        </View>
        <Text style={styles.nameText}>{person.name}</Text>
        <Text style={styles.usernameText}>@{person.username}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <TouchableOpacity style={styles.infoRow} onPress={handleEmailPress} activeOpacity={0.6}>
          <View style={styles.iconContainerWrapper}>
             <Mail size={22} color="#007AFF" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{person.email}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.infoRow} onPress={handlePhonePress} activeOpacity={0.6}>
          <View style={styles.iconContainerWrapper}>
            <Phone size={22} color="#34C759" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{person.phone}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.infoRow} onPress={handleWebsitePress} activeOpacity={0.6}>
          <View style={styles.iconContainerWrapper}>
            <Globe size={22} color="#FF9500" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Website</Text>
            <Text style={styles.infoValue}>{person.website}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Work & Location</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.iconContainerWrapper}>
            <Building size={22} color="#AF52DE" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Company</Text>
            <Text style={styles.infoValue}>{person.company.name}</Text>
            <Text style={styles.infoSubValue}>"{person.company.catchPhrase}"</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.iconContainerWrapper}>
            <MapPin size={22} color="#FF3B30" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>{formattedAddress}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  headerCard: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  avatarLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarLargeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  usernameText: {
    fontSize: 16,
    color: '#666',
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainerWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  infoSubValue: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
});

export default PersonDetails;
