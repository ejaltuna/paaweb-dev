
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'
import Bannner from '../components/Bannner'

 
const Index = ({ }) => {
  return (
    <AppLayout title="App" >

    <Bannner></Bannner>

    </AppLayout>
  );
  

};





export default Index;

