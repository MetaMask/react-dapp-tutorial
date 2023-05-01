// imports

// Create interface for MetaMaskData
// Add property named wallet with typeOf `initialState`
// Include hasProvider, error, errorMessage, isConnecting
// We will have connectMetaMask, and clearError functions that need to be shared

// Initialize `initialState` with empty values ([] and "")

// Create MetaMaskContext using `createContext` with `MetaMaskData`

// Create MetaMaskContextProvider
// This will be a function that takes { children }: PropsWithChildren
// Most of what we had in our single component can be moved here

// Copy over the following functions from our single component
// `updateWallet`, `connectMetaMask`, and `clearError`

// Return MetaMaskContext provider + { children }

// Define useMetaMask and return context