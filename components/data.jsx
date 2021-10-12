import firebase from './firebase';
import '@firebase/firestore';

const Data = () =>{

    const [ title, setTitle ] = useState()
    const [ subTitle, setSubTitle] = useState()
    const [ dsc, setDsc ] = useState()

    const gettitle = (e) => {
        setTitle(e.target.value)
    }

    const getsubTitle = (e) =>{
        setSubTitle(e.target.value)
    }

    const getdsc = (e) =>{
        setDsc(e.target.value)
    }


}

export default Data;