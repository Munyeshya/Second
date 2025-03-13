import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Register pressed:', { name, email, password, confirmPassword });
    // Implement registration logic here
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={null} // Remove header image for simplicity
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Create an Account
        </ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <ThemedText type="defaultSemiBold" style={styles.registerText}>
            Register
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity>
          <ThemedText type="defaultSemiBold" style={styles.loginRedirect}>
            Already have an account? Login
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  registerText: {
    color: '#fff',
  },
  loginRedirect: {
    color: '#007AFF',
    marginTop: 10,
  },
});
