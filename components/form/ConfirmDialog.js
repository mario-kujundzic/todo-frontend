import { Alert } from 'react-native';

const ConfirmDialog = (title, message, confirmAction, cancelAction) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Cancel',
                onPress: cancelAction,
                style: 'cancel'
            },
            {
                text: 'Confirm',
                onPress: confirmAction
            }
        ]
    )
}

export default ConfirmDialog;