//Styles
export default styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addbuttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: 300,
        borderWidth: 2,
        marginVertical: 2,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
    },
    searchIconStyle: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginHorizontal:10
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        width: 350,
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
        padding: 5
    },
    textInputStyle: {
        borderWidth: 2,
        width: 250
    },
    errorTextStyle: {
        color: 'red',
        alignSelf: 'flex-start'
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5
    },
    headerTitleStyle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
        marginHorizontal: 20
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        elevation: 2,
        marginHorizontal: 20,

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    itemTextStyle: {
        fontSize: 22,
        fontWeight: "bold"
    }

}