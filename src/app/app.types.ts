export type PasswordConfigProperty = 'letters' | 'symbols' | 'numbers';
export interface PasswordConfig {
  letters: boolean;
  numbers: boolean;
  symbols: boolean;
}
