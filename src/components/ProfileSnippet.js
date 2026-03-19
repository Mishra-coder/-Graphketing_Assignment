import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Mail, Phone, Building } from 'lucide-react-native';

const ProfileSnippet = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.headerRow}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.usernameText}>@{item.username}</Text>
        </View>
      </View>
      
      <View style={styles.infoRow}>
        <Mail size={16} color="#666" style={styles.icon} />
        <Text style={styles.infoText} numberOfLines={1}>{item.email}</Text>
      </View>

      <View style={styles.infoRow}>
        <Phone size={16} color="#666" style={styles.icon} />
        <Text style={styles.infoText} numberOfLines={1}>{item.phone}</Text>
      </View>

      <View style={styles.infoRow}>
        <Building size={16} color="#666" style={styles.icon} />
        <Text style={styles.infoText} numberOfLines={1}>{item.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007AFF',
  },
  nameContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  usernameText: {
    fontSize: 14,
    color: '#888',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    flex: 1,
  },
});

export default ProfileSnippet;
