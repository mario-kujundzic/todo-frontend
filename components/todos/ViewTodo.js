import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from '../form/StyledButton';
import StyledTextField from '../form/StyledTextField';
import { getTitleErrors } from '../../util';
import StyledCheckBox from '../form/StyledCheckBox';
import StyledRadioGroup from '../form/StyledRadioGroup';
import TodoService from '../../services/TodoService';

export default function ViewTodo({ finishAction, todo= {} }) {
    const [title, setTitle] = useState(todo.title || "");
    const [description, setDescription] = useState(todo.description || "");
    const [priority, setPriority] =  useState(todo.priority || 0);
    const [completed, setCompleted] = useState(todo.completed || false);

    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const [loading, setLoading] = useState(false);

    const validateTitle = (newTitle) => {
        let error = getTitleErrors(newTitle);
        setTitle(newTitle);
        if (error) {
            setTitleError(error);
        } else {
            setTitleError('');
        };
    }

    const saveChanges = async () => {
        if (!titleError && !descriptionError && !loading) {
            setLoading(true);
            let newTodo = { title, description, priority, completed };
            if (todo.id) {
                newTodo.id = todo.id;
            }
            let errors = await finishAction(newTodo);
            if (errors) {
                if (errors.title) {
                    setTitleError(error.title);
                }
                if (errors.description) {
                    setDescriptionError(error.description);
                }
                setLoading(false);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Title</Text>
                <StyledTextField
                    text={title}
                    onChangeText={validateTitle}
                    placeholder="Enter a title..."
                    errorText={titleError}
                    />
                <Text>Description</Text>
                <StyledTextField
                    text={description}
                    setText={setDescription}
                    placeholder="Enter a description..."
                    errorText={descriptionError}
                    multiline
                    numberOfLines={4}
                    />
                <Text>Priority</Text>
                <StyledRadioGroup 
                    value={priority} 
                    onValueChange={setPriority}
                    options={[
                        {id: 0, text: "Low"},
                        {id: 1, text: "Medium"},
                        {id: 2, text: "High"}
                    ]}
                    />
                <Text>Completed</Text>
                <StyledCheckBox 
                    value={completed}
                    onValueChange={setCompleted} />
            </View>
            <View style={styles.confirm}>
                <StyledButton
                    onPress={saveChanges}
                    text="Save changes"
                    disabled={!title || loading} 
                    loading={loading} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    form: {

    },
    confirm: {

    }
});