import { View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export function CustomTabs({ state, descriptors, navigation }: BottomTabBarProps) {


    const tabbarIcons: any = {
        index: (isFocused: boolean) => (
            <FontAwesome6 name="house-crack"
                size={verticalScale(30)}
                // fontWeight={isFocused ? "fill" : "regular"}
                color={isFocused ? colors.primary : colors.neutral400}

            />
        ),
        statistics: (isFocused: boolean) => (
            <FontAwesome6 name="house-crack"
                size={verticalScale(30)}
                // fontWeight={isFocused ? "fill" : "regular"}
                color={isFocused ? colors.primary : colors.neutral400}
            />
        ),
        wallet: (isFocused: boolean) => (
            <FontAwesome6 name="house-crack"
                size={verticalScale(30)}
                // fontWeight={isFocused ? "fill" : "regular"}
                color={isFocused ? colors.primary : colors.neutral400}
            />
        ),
        profile: (isFocused: boolean) => (
            <FontAwesome6 name="house-crack"
                size={verticalScale(30)}
                // fontWeight={isFocused ? "fill" : "regular"}
                color={isFocused ? colors.primary : colors.neutral400}
            />
        ),

    }

    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabbarItem}
                    >
                        {tabbarIcons[route.name] && tabbarIcons[route.name](isFocused)}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        width: '100%',
        height: Platform.OS === 'ios' ? verticalScale(73) : verticalScale(55),
        backgroundColor: colors.neutral800,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: colors.neutral700,
        borderTopWidth: 1
    },
    tabbarItem: {
        marginBottom: Platform.OS === 'ios' ? spacingY._10 : spacingY._5,
        justifyContent: 'center',
        alignItems: "center"
    }

})