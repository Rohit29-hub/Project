import { LucideChevronsRight, Minus, Plus } from 'lucide-react-native';
import React, { JSXElementConstructor, ReactElement, useState } from 'react'
import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SwipeButton from 'rn-swipe-button';
import { useModal } from '../../context/ModalContext';
import Slider from '@react-native-community/slider';

const SlideButton = ({color}:{color: string}): ReactElement<any, string | JSXElementConstructor<any>> => {
    return (
        <View style={{ display: 'flex', width: 50, height: 50, backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 2 }}>
            <LucideChevronsRight color={color} size={35} />
        </View>
    );
}

const BetModal = () => {
    const { modalVisible, closeModal, modalData } = useModal();

    const updateSwipeStatusMessage = (message: string) => {
        console.log(message);
    }
    
    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
        >
            <View style={modalStyle.modalWrapper}>
                <View style={modalStyle.modalContent}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Text style={modalStyle.modalTitle}>{modalData?.name}</Text>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                            source={{
                                uri: modalData?.image_url,
                            }}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={modalStyle.yesnoContainer}>
                        <View style={[modalStyle.yesButton,{
                            backgroundColor: modalData?.isYes ? '#3464cd' : '#1c1c1e'
                        }]}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Yes ₹ {modalData?.yesValue}</Text>
                        </View>
                        <View style={[modalStyle.noButton,{
                            backgroundColor: modalData?.isYes ? '#1c1c1e' : '#06c270' 
                        }]}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>No ₹ {modalData?.noValue}</Text>
                        </View>
                    </View>

                    <View style={modalStyle.sliderContainer}>
                        <View style={modalStyle.sliderContainerTop}>
                            <Text style={modalStyle.label}>Price</Text>
                            <View>
                                <Text style={{ fontSize: 14, color: '#fff', textAlign: 'right' }}>{modalData?.isYes ? modalData.yesValue : modalData?.noValue}</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>123494 qty available</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: 'gray',
                            borderStyle: 'dashed'
                        }}>
                            <TouchableOpacity style={{
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 10
                            }}>
                                <Plus size={24} color={"#111"} />
                            </TouchableOpacity>
                            <Slider
                                style={{ width: 200, height: 40 }}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor={modalData?.isYes ? "#3464cd" : "#06c270"}
                                maximumTrackTintColor="#fff"
                                thumbTintColor={modalData?.isYes ? "#3464cd" : "#06c270"}
                                value={5}
                                step={0.1}
                                onValueChange={() => {
                                    
                                }}
                            />
                            <TouchableOpacity style={{
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 10
                            }}>
                                <Minus size={24} color={"#111"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            marginTop: 10,
                        }}>
                            <View>
                                <Text style={modalStyle.price}>₹ {modalData?.putting_amount}</Text>
                                <Text style={{ color: '#fff', fontSize: 14 }}>You put</Text>
                            </View>
                            <View>
                                <Text style={[modalStyle.price,{color: 'green'}]}>₹ {modalData?.putting_amount + 10}</Text>
                                <Text style={{ color: '#fff', fontSize: 14 }}>You get</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10
                    }}>
                        <SwipeButton
                            titleStyles={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}
                            thumbIconBackgroundColor='transparent'
                            thumbIconBorderColor='transparent'
                            railFillBackgroundColor='#3464cd'
                            railFillBorderColor='transparent'
                            tcontainerStyles={{ borderRadius: 5, }}
                            height={60}
                            containerStyles={{
                                overflow: 'hidden'
                            }}
                            onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
                            onSwipeStart={() => updateSwipeStatusMessage('Swipe for Yes')}
                            onSwipeSuccess={() =>
                                updateSwipeStatusMessage('Submitted successfully!')
                            }
                            railBackgroundColor={modalData?.isYes ? "#3464cd" : "#06c270"}
                            railStyles={{ borderRadius: 5, overflow: 'hidden' }} // @ts-ignore
                            thumbIconComponent={() => <SlideButton color={modalData?.isYes ? "#3464cd" : "#06c270"}/>}
                            thumbIconStyles={{ display: 'flex', alignItems: 'flex-start', paddingLeft: 6, }}
                            title="Swipe for Yes"
                        />
                    </View>
                    <View>
                        <Text style={modalStyle.balanceText}>Available Balance: ₹ 400.00</Text>
                    </View>

                    <View onTouchMove={closeModal} style={{
                        position: 'absolute',
                        top: -15,
                        left: 0,
                        right: 0,
                        width: Dimensions.get('screen').width,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            width: 50,
                            height: 10,
                            borderRadius: 100,
                            backgroundColor: 'white'
                        }}>

                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const modalStyle = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#303843a6',
    },
    modalContent: {
        position: 'relative',
        height: 500,
        backgroundColor: '#0d0d0d',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    yesnoContainer: {
        width: '100%',
        height: 55,
        backgroundColor: '#1c1c1e',
        overflow: 'hidden',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 7,
        borderWidth: 1,
        borderColor: '#343a40',
        borderStyle: 'solid'
    },
    yesButton: {
        flex: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    noButton: {
        flex: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    modalTitle: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sliderContainer: {
        marginTop: 15,
        flexDirection: 'column',
        rowGap: 5,
        width: '100%',
        height: 215,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#343a40',
        borderRadius: 10,
        padding: 10,
    },
    sliderContainerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        color: '#fff',
    },
    price: {
        fontSize: 16,
        color: '#fff',
    },
    balanceText: {
        marginTop: 20,
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    closeButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});


export default BetModal