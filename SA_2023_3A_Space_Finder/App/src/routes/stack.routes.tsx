import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createNativeStackNavigator();
const Stack = createStackNavigator();

//Geral
import { ScreenLogin } from '../screens/Home/Login';
import { ScreenProfileType } from '../screens/Home/ProfileType';


//RecPassword
import { ScreenRecPassword } from '../screens/Home/RecPassword/index';
import { ScreenCodPassword } from '../screens/Home/RecPassword/codPassword';
import { ScreenNewPassword } from '../screens/Home/RecPassword/newPassword';

//Teacher
import { ScreenSignInTeacher } from '../screens/Home/SignIn/signInTeacher';
import { ScreenClassBookingTeacher } from '../screens/Teacher/ClassesBooking';
import { ScreenProfileTeacher } from '../screens/Teacher/Profile';


//Student
import { ScreenSignInStudent } from '../screens/Home/SignIn/signInStudent';
import { ScreenClassSelection } from '../screens/Student/ClassSelection';
import { ScreenProfileStudent } from '../screens/Student/Profile';

//Classes
import { ScreenClassBooking1A } from '../screens/Student/ClassSelection/ClassesList/FirstGrade/1A/1A';
import { ScreenClassBooking1B } from '../screens/Student/ClassSelection/ClassesList/FirstGrade/1B/1B';
import { ScreenClassBooking1C } from '../screens/Student/ClassSelection/ClassesList/FirstGrade/1C/1C';
import { ScreenClassBooking1D } from '../screens/Student/ClassSelection/ClassesList/FirstGrade/1D/1D';

import { ScreenClassBooking2A } from '../screens/Student/ClassSelection/ClassesList/SecondGrade/2A/2A';
import { ScreenClassBooking2B } from '../screens/Student/ClassSelection/ClassesList/SecondGrade/2B/2B';
import { ScreenClassBooking2C } from '../screens/Student/ClassSelection/ClassesList/SecondGrade/2C/2C';
import { ScreenClassBooking2D } from '../screens/Student/ClassSelection/ClassesList/SecondGrade/2D/2D';

import { ScreenClassBooking3A } from '../screens/Student/ClassSelection/ClassesList/ThirdGrade/3A/3A';
import { ScreenClassBooking3B } from '../screens/Student/ClassSelection/ClassesList/ThirdGrade/3B/3B';
import { ScreenClassBooking3C } from '../screens/Student/ClassSelection/ClassesList/ThirdGrade/3C/3C';
import { ScreenClassBooking3D } from '../screens/Student/ClassSelection/ClassesList/ThirdGrade/3D/3D';

//Adm
import { ScreenSignInAdm } from '../screens/Home/SignIn/signInAdm';
import { ScreenClassBookingAdm } from '../screens/Adm/Classrooms';
import { ScreenTeachersInfoAdm } from '../screens/Adm/TeachersInfo';
import { ScreenProfileAdm } from '../screens/Adm/Profile';

export function StackRoutes() {
    return (
        <Stack.Navigator>

            <Screen
                name='ScreenProfileType'
                component={ScreenProfileType}
                options={{
                    title: 'Bem-vindo!', headerStyle: { backgroundColor: '#003F72', height: 130, },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />



            <Screen
                name='ScreenLogin'
                component={ScreenLogin}
                options={{
                    title: 'Bem-vindo!', headerStyle: { backgroundColor: '#003F72', height: 130, },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />

            <Screen
                name='ScreenRecPassword'
                component={ScreenRecPassword}
                options={{
                    title: 'Esqueci minha senha', headerStyle: { backgroundColor: '#003F72', height: 130, },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 20 }, headerTitleAlign: 'center',
                }}
            />

            <Screen
                name='ScreenCodPassword'
                component={ScreenCodPassword}
                options={{
                    title: 'Esqueci minha senha', headerStyle: { backgroundColor: '#003F72', height: 130, },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 20 }, headerTitleAlign: 'center',
                }}
            />

            <Screen
                name='ScreenNewPassword'
                component={ScreenNewPassword}
                options={{
                    title: 'Nova senha!', headerStyle: { backgroundColor: '#003F72', height: 130, },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 20 }, headerTitleAlign: 'center',
                }}
            />

            <Screen
                name='ScreenSignInTeacher'
                component={ScreenSignInTeacher}
                options={{
                    title: 'Cadastro', headerStyle: { backgroundColor: '#003F72', height: 150 },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBookingTeacher'
                component={ScreenClassBookingTeacher}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='ScreenProfileTeacher'
                component={ScreenProfileTeacher}
                options={{
                    title: 'Perfil', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />



            <Screen
                name='ScreenSignInAdm'
                component={ScreenSignInAdm}
                options={{
                    title: 'Cadastro', headerStyle: { backgroundColor: '#003F72', height: 150 },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBookingAdm'
                component={ScreenClassBookingAdm}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='ScreenTeachersInfoAdm'
                component={ScreenTeachersInfoAdm}
                options={{
                    headerShown: false
                }}
            />


            <Screen
                name='ScreenProfileAdm'
                component={ScreenProfileAdm}
                options={{
                    title: 'Perfil', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />


            <Screen
                name='ScreenSignInStudent'
                component={ScreenSignInStudent}
                options={{
                    title: 'Cadastro', headerStyle: { backgroundColor: '#003F72', height: 150 },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenProfileStudent'
                component={ScreenProfileStudent}
                options={{
                    title: 'Perfil', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassSelection'
                component={ScreenClassSelection}
                options={{
                    title: 'Selecione sua turma', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 22 }, headerTitleAlign: 'center',
                }}
            />



            <Screen
                name='ScreenClassBooking1A'
                component={ScreenClassBooking1A}
                options={{
                    title: '1A', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking1B'
                component={ScreenClassBooking1B}
                options={{
                    title: '1B', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking1C'
                component={ScreenClassBooking1C}
                options={{
                    title: '1C', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking1D'
                component={ScreenClassBooking1D}
                options={{
                    title: '1D', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />


            <Screen
                name='ScreenClassBooking2A'
                component={ScreenClassBooking2A}
                options={{
                    title: '2A', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking2B'
                component={ScreenClassBooking2B}
                options={{
                    title: '2B', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking2C'
                component={ScreenClassBooking2C}
                options={{
                    title: '2C', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking2D'
                component={ScreenClassBooking2D}
                options={{
                    title: '2D', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />


            <Screen
                name='ScreenClassBooking3A'
                component={ScreenClassBooking3A}
                options={{
                    title: '3A', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking3B'
                component={ScreenClassBooking3B}
                options={{
                    title: '3B', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking3C'
                component={ScreenClassBooking3C}
                options={{
                    title: '3C', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ScreenClassBooking3D'
                component={ScreenClassBooking3D}
                options={{
                    title: '3D', headerStyle: { backgroundColor: '#003F72' },
                    headerTintColor: '#fff', headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center',
                }}
            />

        </Stack.Navigator>
    )
}
