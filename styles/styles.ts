import { StyleSheet } from 'react-native';

export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tagline: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#555',
    alignSelf: 'center',
    marginBottom: 32,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  subheader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  or: {
    marginHorizontal: 8,
    color: '#888',
  },
  socialButton: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialText: {
    color: '#333',
    fontWeight: '500',
  },
  disclaimer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 24,
  },
  link: {
    color: '#000',
    fontWeight: '500',
  },
});
