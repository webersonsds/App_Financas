import React from 'react';
import {
  Container, 
  TipoText,
  Tipo,
  IconView,
  ValorText
} from './styles';
import {TouchableNativeFeedback, Alert} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data,deleteItem }){

  function handelDeleteItem(){
 Alert.alert(
  'atenção',
  'voce tem tem certeza que deseja apagar esse item',
  [
    {
      text: 'Cancelar',
      style:'cancel'
    },
    {
      text:'Continuar',
      onPress: () => deleteItem(data.id)
    }
  ]
 )
}

  return(
    <TouchableNativeFeedback onLongPress={handelDeleteItem}>
    <Container>
      
      <Tipo>
        <IconView tipo={data.type}>
          <Icon 
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20} 
            color="#FFF" 
          />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        R$ {data.value}
      </ValorText>

    </Container>
    </TouchableNativeFeedback>
  )
}