import React from 'react'
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react"
import styles from "./signup.module.css"
import { Link } from "react-router-dom"

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Grid textAlign="center" verticalAlign="middle" className={styles.container}>
            <Grid.Column style={{ maxWidth: "450px" }}>
                <h1 className={styles.formHeader} >Chat</h1>
                <Form size="large" className={styles.form} onSubmit={handleSubmit}>
                    <Segment>
                        <Form.Input fluid icon="user" iconPosition="left" name="username" placeholder="Kullanıcı Adı" type="text" />
                        <Form.Input fluid icon="mail" iconPosition="left" name="email" placeholder="Email" type="email" />
                        <Form.Input fluid icon="lock" iconPosition="left" name="password" placeholder="Sifre" type="password" />
                        <Button color="blue" fluid size="large">
                           Kayıt Ol
            </Button>
                    </Segment>
                </Form>
                <Message>
                    Hesabınız var mı ? <Link to="/login">Giriş Yap</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp
