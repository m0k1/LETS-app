echo "\n WARNING! Did you remember to change the version and versionCode numbers in config.xml? \n"

./lets-prepare.sh

ionic cordova build --release android # compile

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore lets-android.keystore platforms/android/build/outputs/apk/release/android-release-unsigned.apk M_LETS # sign

rm CommunityExchange_beta.apk # delete old version

~/Library/Android/sdk/build-tools/27.0.1/zipalign -v 4 platforms/android/build/outputs/apk/release/android-release-unsigned.apk CommunityExchange_beta.apk # prepare apk
