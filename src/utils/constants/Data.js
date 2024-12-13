import { version } from 'react-native/package.json';
//select category
export const categories = [
    { id: 1, category: 'Movers', image: require('../../utils/movers.png') },
    { id: 2, category: 'Towing', image: require('../../utils/towing.png') },
    { id: 3, category: 'Water Supply', image: require('../../utils/watersupply.png') },
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
