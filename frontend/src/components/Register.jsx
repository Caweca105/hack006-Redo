import { useFormik } from "formik";

const Register = () => {
    const { } = useFormik({
        initialValues: {
            
        }
    })
}

return (
    <form >
        <label>Nome</label>
        <input placeholder='Insira seu nome aqui' /> <br />
        <label>Sobre mim</label>
        <input placeholder='Fale me sobre si' /> <br />
        <label>Email</label>
        <input placeholder='Insira o seu email aqui' /> <br />
        <label>Telefone</label>
        <input placeholder='Insira o seu email aqui' /> <br />
        <label>Profissão</label>
        <input placeholder='Insira a sua profissão aqui' /> <br />
        <label>Habilitações Literárias</label>
        <input placeholder='Insira as suas habilitaçẽs literárias' /> <br />
    </form>
)