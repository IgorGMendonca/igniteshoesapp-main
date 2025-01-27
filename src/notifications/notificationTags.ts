import { OneSignal } from 'react-native-onesignal'

export function tagUserEmailCreate(email: string) {
    OneSignal.User.addTag('user_email', email)
}


//Caso queira criar uma tag temporária
export function tagUserEmailDelete() {
    OneSignal.User.removeTag('user_email')
}