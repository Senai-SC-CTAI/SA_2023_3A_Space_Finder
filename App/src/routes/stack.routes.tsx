import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createNativeStackNavigator();
const Stack = createStackNavigator();

//Geral
import { ScreenLogin } from '../screens/Home/Login';
import { ScreenProfileType } from '../screens/Home/ProfileType';

//Teacher
import { ScreenSignInTeacher } from '../screens/Home/SignIn/signInTeacher';
import { ScreenClassBookingTeacher } from '../screens/Teacher/ClassesBooking';

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
            />



            <Screen
                name='ScreenLogin'
                component={ScreenLogin}
            />



            <Screen
                name='ScreenSingInTeacher'
                component={ScreenSignInTeacher}
            />
            <Screen
                name='ScreenClassBookingTeacher'
                component={ScreenClassBookingTeacher}
            />



            <Screen
                name='ScreenSignInAdm'
                component={ScreenSignInAdm}
            />
            <Screen
                name='ScreenClassBookingAdm'
                component={ScreenClassBookingAdm}
            />
            <Screen
                name='ScreenProfileAdm'
                component={ScreenProfileAdm}
            />




            <Screen
                name='ScreenSingInStudent'
                component={ScreenSignInStudent}
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
