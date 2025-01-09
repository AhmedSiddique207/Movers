import { version } from 'react-native/package.json';
import { movers, towing, userprofileicon, watersupply } from './Images';
//select category
export const categories = [
    { id: 1, category: 'Movers', image: movers },
    { id: 2, category: 'Towing', image: towing },
    { id: 3, category: 'Water Supply', image: watersupply },
];

//side bar
export const menuItems = [
    { id: '1', title: 'City', icon: 'car', link: '' },
    { id: '2', title: 'Request History', icon: 'history', link: 'RequestHistory' },
    { id: '3', title: 'City To City', icon: 'globe', link: '' },
    { id: '4', title: 'Settings', icon: 'cog', link: 'Settings' },
    { id: '5', title: 'Safety', icon: 'shield', link: 'Safety' },
    { id: '6', title: 'FAQ', icon: 'info-circle', link: 'Faqs' },
    { id: '7', title: 'Online Registration', icon: 'pencil', link: '' },
];

//request history
export const HistoryDetails = [
    { id: 1, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
    { id: 2, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
    { id: 3, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
]

//Safety
export const safetylist = [
    { id: 1, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Ambulance', iconright: 'chevron-right', iconrightType: 'evilIcons' },
    { id: 2, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Police', iconright: 'chevron-right', iconrightType: 'evilIcons' },
    { id: 3, iconleft: 'shield-checkmark-outline', iconleftType: 'ionicons', mainheading: 'Safety Tips', iconright: 'chevron-right', iconrightType: 'evilIcons' },
    { id: 4, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Fire extinguisher call', iconright: 'chevron-right', iconrightType: 'evilIcons' },
    { id: 5, iconleft: 'call-outline', iconleftType: 'ionicons', mainheading: 'Admin Call', iconright: 'chevron-right', iconrightType: 'evilIcons' },
]

//Faqs
export const FAQlist = [
    { id: 1, heading: 'Main Topics' },
    { id: 2, heading: 'City', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 3, heading: 'City to City', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 4, heading: 'Courier', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 5, heading: 'Freight', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 6, version: 'More' },
    { id: 7, heading: 'App Issues', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 8, heading: 'About in MoveFaster', iconname: 'chevron-right', icontype: 'evilIcons' },
]

//RulesTerms
export const ruleslist = [
    { id: 1, heading: 'Service Rules' },
    { id: 2, heading: 'Terms & Condition', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 3, heading: 'Privacy Policy', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 4, heading: 'License', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 5, heading: 'App Version', version: version, iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 6, heading: 'App Issues', iconname: 'chevron-right', icontype: 'evilIcons' },
    { id: 7, heading: 'About in MoveFaster', iconname: 'chevron-right', icontype: 'evilIcons' },
]

//lanuages
export const languageList = [
    { id: 1, heading: 'English', subheading: 'English' },
    { id: 2, heading: 'French', subheading: 'Farncia' },
    { id: 3, heading: 'Urdu', subheading: 'Urdu' },
    { id: 4, heading: 'Hindi', subheading: 'Hindi' },
    { id: 5, heading: 'Filpino', subheading: 'Filpine' },
]
//selectdriver
export const driveroffer = [
    { id: 1, icon: userprofileicon, name: 'Arfeen', time: '4 min', distance: '443M', rating: '4.9(13)', price: 359 },
    { id: 2, icon: userprofileicon, name: 'Jhon', time: '2 min', distance: '200M', rating: '4.6(10)', price: 200 },

]

//bluetoothDevices
export const BluetoothDevicesNames = [
    { id: 1, deviceName: 'Unnamed Device', deviceId: '57:9A:C0:8B:ED:BF', duration: '1 hour ago' },
    { id: 2, deviceName: 'Unnamed Device', deviceId: '57:9A:C0:8B:ED:BF', duration: '8 hours ago' },
    { id: 3, deviceName: 'Unnamed Device', deviceId: '57:9A:C0:8B:ED:BF', duration: '30 minutes ago' },
    { id: 4, deviceName: 'Print 1622', deviceId: '57:9A:C0:8B:ED:BF', duration: '16 hours ago' },
    { id: 5, deviceName: 'Print 110k', deviceId: '57:9A:C0:8B:ED:BF', duration: '1 day ago' },
    { id: 6, deviceName: 'Print 16am2', deviceId: '57:9A:C0:8B:ED:BF', duration: '22 hours ago' },
    { id: 7, deviceName: 'Print 161', deviceId: '57:9A:C0:8B:ED:BF', duration: '1 week ago' },
    { id: 8, deviceName: 'Print 16S987', deviceId: '57:9A:C0:8B:ED:BF', duration: '1 month ago' },
    { id: 9, deviceName: 'Print 16h23', deviceId: '57:9A:C0:8B:ED:BF', duration: '2 minutes ago' },
    { id: 10, deviceName: 'Print 16mI89', deviceId: '57:9A:C0:8B:ED:BF', duration: '16 seconds ago' }

]

//PrintDevices
export const PrintInput = [
    { id: 1, label: 'Name', isMultiline: 'no' },
    { id: 2, label: 'Type', isMultiline: 'no' },
    { id: 3, label: 'Date 1', isMultiline: 'no' },
    { id: 4, label: 'Date 2', isMultiline: 'no' },
    { id: 5, label: 'Date 3', isMultiline: 'no' },
    { id: 6, label: 'Date 4', isMultiline: 'no' },
    { id: 7, label: 'Note', isMultiline: 'yes' },
]