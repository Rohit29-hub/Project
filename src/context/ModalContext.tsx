import React, { createContext, useState, ReactNode, useContext } from 'react';

type DataType = {
    name: string,
    yesValue: string,
    noValue: string,
    isYes: boolean,
    putting_amount?: any,
    image_url: string,
}

type ModalContextType  = {
    modalVisible: boolean;
    modalData: DataType | null;
    openModal: (data: DataType) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
    children: ReactNode;
}

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState<DataType | null>(null);

    const openModal = (data: DataType) => {
        data['putting_amount'] = data.isYes ? data.yesValue :  data.noValue;
        setModalData(data);
        setModalVisible(true);
    };


    const closeModal = () => {
        setModalVisible(false);
        setModalData(null);
    };

    return (
        <ModalContext.Provider value={{ modalVisible, modalData, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
