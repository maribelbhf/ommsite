import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const ContactForm = () => {
  const FormElement = styled.label`
    border-bottom: 2px solid grey;
    width: 100%
    background-color: none;
    display: block;

    input {
      background-color: transparent;
      border: none;
      color: white;
      font-family: Roboto;
      padding-bottom: 0.5em;
      padding-top: 1em;
      width: 100%;
    }
  `
  const FormElementHalf = styled.label`
    border-bottom: 2px solid grey;
    width: 25vw;
    background-color: none;
    display: inline-block;

    input {
      background-color: transparent;
      border: none;
      color: white;
      font-family: Roboto;
      padding-bottom: 0.5em;
      padding-top: 1em;
      width: 25vw;
    }
    @media only screen and (max-width: 559px) {
      display: block;
        width: 100%;
        input{
          width: 100%;
        }

      }
    }
  `

  const Send = styled.a`
    color: #ec008c;
    font-family: Roboto;
    float: right;
    margin-right: 3em;
    margin-top: 2em;
    &:hover {
      text-decoration: underline;
    }
  `

  const Mail = styled.div`
    color: white;
    font-weight: 600;
    padding-top: 5em;
    font-family: Roboto;
    font-size: 1.5em;
  `

  const SocialIcon = styled.div`
    color: white;
    display: inline-block;
    margin-right: 1em;
  `

  return (
    <>
      <form>
        <FormElement>
          <input type="text" name="name" placeholder="Name" />
        </FormElement>
        <FormElement>
          <input type="email" name="email" placeholder="Email" />
        </FormElement>
        <div className="multipleRows">
          <FormElementHalf>
            <input
              type="text"
              name="telef"
              placeholder="Tel&eacute;fono"
              className="telf"
            />
          </FormElementHalf>

          <FormElementHalf>
            <input type="text" name="city" placeholder="Ciudad" />
          </FormElementHalf>
        </div>
        <FormElement>
          <input type="textarea" name="message" placeholder="Mensaje" />
        </FormElement>
        <Send>Enviar</Send>
      </form>

      <div className="multipleRows contact">
        <Mail>omm@ommgroup.com</Mail>
        <div className="socialContainer">
          <SocialIcon>
            <FaFacebookF size={25} />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram size={25} />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter size={25} />
          </SocialIcon>
        </div>
      </div>
    </>
  )
}

export default ContactForm
