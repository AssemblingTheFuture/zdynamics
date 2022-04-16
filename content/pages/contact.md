---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Contacto
sections:
  - type: TextSection
    colors: colors-a
    title: ¡Escríbenos!
    subtitle: >-
      Si requieres algún servicio especializado o si quieres darnos tus
      comentarios (incluso si no están directamente relacionados con este
      proyecto). Ambos podemos ayudarnos mutuamente ;)
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-12
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: ContactSection
    elementId: ''
    colors: colors-h
    backgroundSize: full
    title: ¡Escríbenos!
    text: >
      Puedes solicitar algún servicio especializado de acuerdo a las necesidades
      de tus proyectos o solamente darnos tus comentarios, incluso si no están
      directamente relacionados con este proyecto ;)
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: Nombre
          label: Nombre
          placeholder: Tu nombre completo
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Correo Electrónico
          placeholder: master@nugget.com
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: address
          label: País de Residencia
          placeholder: e.g. México
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
