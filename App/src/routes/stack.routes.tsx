import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createNativeStackNavigator();
const Stack = createStackNavigator();

//Geral
import { ScreenLogin } from '../screens/Home/Login';
import { ScreenProfileType } from '../screens/Home/ProfileType';

//Teacher
import { ScreenSignInTeacher } from '../screens/Home/SignIn/signInTeacher';
import { alunoHorarios } from '../screens/Teacher/ClassesBooking';
import  ScreenProfileTeacher  from '../screens/Teacher/Profile'; 


//Student
import { ScreenSignInStudent } from '../screens/Home/SignIn/signInStudent';
import { ScreenClassBooking } from '../screens/Student/ClassesBooking';
import { ScreenClassSelection } from '../screens/Student/ClassSelection';
import { ScreenProfileStudent } from '../screens/Student/Profile';

//Adm
import { ScreenSignInAdm } from '../screens/Home/SignIn/signInAdm';
import { ScreenClassBookingAdm } from '../screens/Adm/Classrooms';
import { ScreenProfileAdm } from '../screens/Adm/Profile';


export function StackRoutes() {
    return (
        <Stack.Navigator>

            <Screen
                name='ScreenProfileType'
                component={ScreenProfileType}
                options={{ title: 'Bem-vindo!', headerStyle:{ backgroundColor:'#003F72', height: 130,}, 
                headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />



            <Screen
                name='ScreenLogin'
                component={ScreenLogin}
            />



            <Screen
                name='ScreenSignInTeacher'
                component={ScreenSignInTeacher}
                options={{ title: 'Cadastro', headerStyle:{ backgroundColor:'#003F72', height: 150}, 
                headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />
            <Screen
                name='ScreenClassBookingTeacher'
                component={alunoHorarios}
            />

             <Screen
                name='ScreenProfileTeacher'
                component={ScreenProfileTeacher}
                 options={{ title: 'Perfil', headerStyle:{ backgroundColor:'#003F72' }, 
          headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />



            <Screen
                name='ScreenSignInAdm'
                component={ScreenSignInAdm}
                options={{ title: 'Cadastro', headerStyle:{ backgroundColor:'#003F72', height: 150}, 
                headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />
            <Screen
                name='ScreenClassBookingAdm'
                component={ScreenClassBookingAdm}
            />
            <Screen
                name='ScreenProfileAdm'
                component={ScreenProfileAdm}
                options={{ title: 'Perfil', headerStyle:{ backgroundColor:'#003F72' }, 
          headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />




            <Screen
                name='ScreenSignInStudent'
                component={ScreenSignInStudent}
                options={{ title: 'Cadastro', headerStyle:{ backgroundColor:'#003F72', height: 150}, 
                headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />
            <Screen
                name='ScreenProfileStudent'
                component={ScreenProfileStudent}
                options={{ title: 'Perfil', headerStyle:{ backgroundColor:'#003F72' }, 
          headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />
            <Screen
                name='ScreenClassSelection'
                component={ScreenClassSelection}
            />
            <Screen
                name='ScreenClassBooking'
                component={ScreenClassBooking}
                options={{ title: '2A', headerStyle:{ backgroundColor:'#003F72' }, 
          headerTintColor:'#fff', headerTitleStyle:{fontSize:25}, headerTitleAlign:'center', }}
            />

        </Stack.Navigator>
    )
}
