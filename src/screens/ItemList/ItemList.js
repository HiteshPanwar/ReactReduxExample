
import React from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';

// Imports: Redux Actions
import { addItem } from '../../redux/actions/itemActions';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

//Styles
import styles from './styles'
//Assets
import SearchIcon from '../../assets/search.png'

class ItemList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            modalVisible: false,
            name: "",
            nameStatus: false,
            nameError: "",


            description: "",
            descriptionStatus: false,
            descriptionError: "",
            Items: this.props.ItemList,
            isRefresh: false,
            Searchresultstatus: false

        };
    };



    handleTextInput = (text, type) => {

        if (type === 'name') {
            this.setState({ name: text })

            if (text === '') {
                this.setState({
                    nameStatus: false,
                    nameError: '*Required.',

                })

            } else {
                this.setState({ name: text })
                this.setState({
                    nameStatus: true,
                    nameError: '',

                })

            }
        } else {
            this.setState({ description: text })
            if (text === '') {
                this.setState({
                    descriptionStatus: false,
                    descriptionError: '*Required.',

                })
            } else {
                this.setState({
                    descriptionStatus: true,
                    descriptionError: '',

                })
            }
        }
    }
    handleSubmit() {

        if (this.state.nameStatus) {
            if (this.state.descriptionStatus) {
                const payload = { itemName: this.state.name, itemDescription: this.state.description }
                this.props.addItem(payload)
                this.setState({ modalVisible: !this.state.modalVisible })
            } else { this.setState({ descriptionError: '*Required.', descriptionStatus: false }) }
        } else { this.setState({ nameError: '*Required.', nameStatus: false }) }
    }
    searchItem = (value) => {
        this.setState({ Items: this.props.ItemList, Searchresultstatus: true })
        let searchedItems = this.props.ItemList.filter(item => (item.itemName.includes(value)) ? item : null)
        this.setState({ Items: searchedItems })
        if (value === "") {
            this.setState({ Searchresultstatus: false })
        }

    }


    _renderItem(item, index) {

        return (
            <View
                style={styles.itemContainer}>
                <Text style={styles.itemTextStyle}> {item.itemName}</Text>
                <Text style={{ fontSize: 18 ,color:'grey'}}> {item.itemDescription}</Text>

            </View>
        )
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitleStyle}>Items</Text>
                    <View style={styles.addbuttonContainer}>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={{ width: 300 }}
                        maxLength={30}
                        placeholder="Search Item"
                        onChangeText={(text) => this.searchItem(text)}
                    />
                    <Image resizeMode='contain' style={styles.searchIconStyle} source={SearchIcon} />
                </View>



                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.Searchresultstatus ? this.state.Items : this.props.ItemList}
                    extraData={this.state.isRefresh}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <TextInput style={styles.textInputStyle}
                                maxLength={30}
                                placeholder="Enter Item Name"
                                onChangeText={(text) => this.handleTextInput(text, "name")}
                            />
                            <Text style={styles.errorTextStyle}>{this.state.nameError}</Text>

                            <TextInput style={styles.textInputStyle}
                                maxLength={80}
                                placeholder="Enter Item Description"
                                onChangeText={(text) => this.handleTextInput(text, "description")}
                            />
                            <Text style={styles.errorTextStyle}>{this.state.descriptionError}</Text>



                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => this.handleSubmit()}
                                >
                                    <Text style={styles.textStyle}>  Add  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        this.setState({ modalVisible: !this.state.modalVisible });
                                    }}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    return {
        ItemList: state.itemReducer.itemList,
    };
};



export default connect(mapStateToProps, { addItem })(ItemList);