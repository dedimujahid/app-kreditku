import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export enum MainRoutes {
    //initial screen
    splash = "splash",
    onboarding = "on-boarding",
    appcheck = "app-check",

    //auth screens
    login = "login",
    signup = "signup",
    forgotPassword = "forgot-password",
    otpPassword = "otp-password",
    //home screens
    Home = "home",
    EbookDetail = "ebook-detail",
    EbookDetailShowCover = "ebook-detail-show-cover",
    EbookByCategory = "ebook-by-category",

    Notificasion = 'notificasion',
}

export enum MainTabRoutes {
    HomeDashboard = "home-dashboard",
    HomeKreditan = "home-ebook",
    HomeKalender = "home-my-book",
    HomeAkun = "home-lainnya",
}

export enum EbookTopRoutes {
    Terdekat = "ebook-home",
    BelumLunas = "ebook-kategori",
    Lunas = "ebook-terpopuler",
}

export enum BukuSayaRoutes {
    PinjamanSaya = "pinjaman-saya",
    WishListSaya = "wishlist-saya",
}

export type RootStackParamList = {
    [MainRoutes.Home]: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;

    [MainRoutes.splash]: undefined;
    [MainRoutes.onboarding]: undefined;
    [MainRoutes.appcheck]: undefined;

    [MainRoutes.login]: undefined;
    [MainRoutes.signup]: undefined;
    [MainRoutes.forgotPassword]: { email?: string } | undefined;
    [MainRoutes.otpPassword]: { token?: string } | undefined;

    [MainRoutes.Notificasion]: undefined;

    //main
    [MainRoutes.EbookDetail]: { id: string };
    [MainRoutes.EbookDetailShowCover]: { cover: string; back_cover: string };
    [MainRoutes.EbookByCategory]: { id: string; title: string };
};

export type BukuSayaParamList = {
    [BukuSayaRoutes.PinjamanSaya]: undefined;
    [BukuSayaRoutes.WishListSaya]: undefined;
};

export type EbookTopBarParamList = {
    [EbookTopRoutes.Terdekat]: undefined;
    [EbookTopRoutes.BelumLunas]: undefined;
    [EbookTopRoutes.Lunas]: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;

export type RootTabParamList = {
    [MainTabRoutes.HomeDashboard]: undefined;
    [MainTabRoutes.HomeKreditan]: NavigatorScreenParams<EbookTopBarParamList> | undefined;
    [MainTabRoutes.HomeKalender]: undefined;
    [MainTabRoutes.HomeAkun]: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;
