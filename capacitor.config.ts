import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vvision.conectaedu.aluno',
  appName: 'Conecta EDU Aluno',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      splashFullScreen: true
    },
    StatusBar: {
      overlaysWebView: false
    }
  }
};

export default config;
