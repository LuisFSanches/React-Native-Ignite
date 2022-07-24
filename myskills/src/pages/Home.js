import React,{useState} from 'react'
import {View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity,
} from 'react-native'


export function HomePage(){
    const [mySkills, setMySkills] = useState([])
    const [skill, setSkill] = useState('')

    const handleAddNewSkill = ()=>{
        setMySkills([...mySkills, skill])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Rodrigo</Text>

            <TextInput style={styles.input} 
                placeholder='New Skill' 
                placeholderTextColor={'#999'}
                onChangeText={setSkill}
                />

            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title,{marginTop:20}]}>My Skills</Text>

            <View style={styles.skills}>{mySkills.map((mySkill)=>(
                <Text style={styles.textbody} key={mySkill}>{mySkill}</Text>
            ))}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#121015',
      paddingVertical: 70,
      paddingHorizontal:30
    },
    title:{
        color: '#fff',
        fontSize:24,
        fontWeight: 'bold'
    },
    textbody:{
        color:'#fff'
    },
    input:{
        backgroundColor:'#1F1E25',
        color: '#fff',
        fontSize:18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop:30,
        borderRadius:7
    },
    button:{
        backgroundColor:'#A370F7',
        padding: 15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20
    },
    buttonText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    skills:{
        flexDirection:'column'
    }
  })