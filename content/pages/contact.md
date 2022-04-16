---
layout: PageLayout
metaTitle: Contáctanos
metaDescription: ;)
addTitleSuffix: true
socialImage: null
metaTags: []
title: Contacto
sections:
  - type: ContactSection
    elementId: ''
    colors: colors-h
    backgroundSize: full
    title: ¡Escríbenos!
    text: >
      Puedes solicitar algún servicio especializado para tus proyectos o
      solamente darnos tus comentarios, incluso si no están directamente
      relacionados con este proyecto ;)
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
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: description
          label: Texto
          hideLabel: false
          placeholder: ¿En qué podemos ayudarte?
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: 'Quiero que me envíen actualizaciones de sus proyectos :D'
          isRequired: false
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
