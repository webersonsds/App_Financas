import React, { useState } from "react";

import { TouchableNativeFeedback, View } from 'react-native'
import { Container, ButtonFilterText, ModalContent, ButtonFilter } from './styles'

import { Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function CalendarModal({ setVisible,handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date())
    const [markeddates, setmarkedDates] = useState({})

    function handeleOnDatePress(date) {
        setDateNow(new Date(date.dateString))

        let markedDay = {}

        markedDay[date.dateString] = {
            selected: true,
            selectedcolor: '#3d3dbf',
            textColor:'#fff'
        }
             setmarkedDates(markedDay)

    }
    function handleFilterDate(){
        handleFilter(dateNow)
        setVisible()
    }
    return (
        <Container>
            <TouchableNativeFeedback onPress={setVisible} >
                <View style={{ flex: 1 }}></View>
            </TouchableNativeFeedback>

            <ModalContent>

                <Calendar
                    onDayPress={handeleOnDatePress}
                    markedDates={markeddates}
                    anableSwipeMonthis={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff'
                    }}
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>


            </ModalContent>
        </Container>
    )
}