import React, { useState } from 'react'
import Login from '../Users/Login/Login.jsx'
import { Link } from 'react-router-dom'
import { Button, Typography, useTheme } from '@mui/material'

const LoginPage = () => {

      const theme = useTheme();

      return (
            <>

                  <Login />

                  <hr />

                  <Typography
                        fontFamily={'semiBold'}
                        sx={{
                              color: theme.palette.primary.main,
                              marginLeft: "0.5rem",
                        }}
                  >
                        ¿Aún no tienes una cuenta?
                  </Typography>

                  <Link to="/register">
                        <Button
                              variant="contained"
                              sx={{
                                    width: '10%',
                                    color: theme.palette.primary.main,
                                    borderRadius: '0',
                              }}
                        >
                              <Typography
                                    fontFamily={'semiBold'}
                                    sx={{
                                          color: 'white'
                                    }}
                              >
                                    Regístrate
                              </Typography>
                        </Button>
                  </Link>
            </>
      )
}

export default LoginPage