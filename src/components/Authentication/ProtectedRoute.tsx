import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../lib/actions'
import { useEffect } from 'react'

const ProtectedRoute = ({children}:any) => {
    const navigation = useNavigate()
    const authenticated = isAuthenticated()
    useEffect(() => { 
        !(authenticated) && navigation("/login")
     },[])


    
     return children
}

export default ProtectedRoute