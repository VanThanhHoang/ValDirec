import { resourcesKey } from "@/lang/i18n.cofig"
import { appColor } from "@/theme"
import appSizing from "@/theme/sizing"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, View } from "react-native"

const AppHeader = () => {
    const {t} = useTranslation()
    return <View>
        <Text style={styles.title}>
            {t('home_header_title')}
        </Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: appSizing.headerHeight,
    },
    title:{
        fontWeight:'bold',
        fontSize:appSizing.h2,
        color:appColor.textColor
    }
})
export default AppHeader