import React from 'react';
import LangToggle from '../components/langToggle/LangToggle';
import Sort from '../components/sort/Sort';
import View from '../components/view/View';
import Filter from '../components/filterSearch/FilterSearch';

class FormContainer extends React.Component {
    render() {
        const activeStyle = {
            backgroundColor: 'var(--primary-bg-color)'
        };

        return (
            <div className="App__form">
                <LangToggle
                    activeStyle={activeStyle}
                />
                <Sort
                    activeStyle={activeStyle}
                />
                <View
                    activeStyle={activeStyle}
                />
                <Filter />
            </div>
        )
    }
}

export default FormContainer;