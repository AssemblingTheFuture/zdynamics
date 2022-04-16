---
title: zDynamics | The Future is ROBOTICS
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-a
    title: zDynamics
    subtitle: The Future is ROBOTICS
    actions:
      - type: Button
        label: MÁS INFORMACIÓN
        altText: MÁS INFORMACIÓN
        url: '#nosotros'
        showIcon: true
        icon: chevronRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/ZD RGB.png
      altText: Image alt text
      caption: Image caption
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-28
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: nosotros
    colors: colors-e
    backgroundSize: inset
    title: ¿Quién @$@% somos?
    text: "Un grupo de amigos que buscan hacer algo más que programar robots:\_**queremos mejorar las condiciones de trabajo a través de la robótica y ramas afines**.\n"
    badge:
      type: Badge
      label: NOSOTROS
      styles:
        self:
          textAlign: left
    actions:
      - type: Button
        label: ¡Conócenos!
        url: /about
        style: primary
        altText: ¡Conócenos!
        showIcon: true
        icon: arrowRightCircle
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-14
          - mb-14
          - ml-4
          - mr-4
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16
        justifyContent: center
        flexDirection: row-reverse
        alignItems: center
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
    media:
      url: /images/team.jpg
      altText: The Team
      caption: The Team
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
  - colors: colors-a
    elementId: ''
    title: '¿Qué %&#@ hacemos?'
    subtitle: >-
      Nosotros te EDUCAMOS en robótica avanzada, donde no solo aprendes a
      vomitar ecuaciones que no entiendes, sino que RAZONAS sobre cómo funciona
      un robot
    items:
      - type: FeaturedItem
        title: Métodos Numéricos con Aplicaciones de Ingeniería
        text: >
          Las matemáticas son muy importantes para cualquier profesional, pero
          es esencial saber resolver problemas rápidamente cumpliendo los
          requisitos teóricos básicos
        featuredImage:
          url: /images/numerics.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
            borderRadius: medium
        actions:
          - type: Link
            label: Comprar ($5 USD)
            altText: ''
            url: 'https://bit.ly/NumericZ'
            showIcon: true
            icon: cart
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: Control de Sistemas Dinámicos
        text: >
          Muchos sistemas todavía se controlan con el clásico sistema PID, pero
          es necesario simplificar esto a través de funciones robustas, basadas
          en criterios de estabilidad más confiables que la asignación de polos
          y ceros.
        featuredImage:
          url: /images/lorenz.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
            borderRadius: medium
        actions:
          - type: Link
            label: Comprar ($5 USD)
            altText: ''
            url: 'https://bit.ly/zControl'
            showIcon: true
            icon: cart
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: 'Robótica: de la Cinemática al Control'
        text: >
          Los robots se diseñan utilizando herramientas teóricas que no se
          enseñan en las aulas de Latinoamérica debido a su complejidad, ¡pero
          se puede aprender de forma muy sencilla!
        featuredImage:
          url: /images/robotics.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
            borderRadius: medium
        actions:
          - type: Link
            label: Más Información
            altText: ''
            url: 'https://bit.ly/RoboticZ'
            showIcon: true
            icon: cart
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        elementId: ''
        title: Programación Básica de Robots con Python
        subtitle: ''
        text: >
          La robótica debe aprenderse practicando con sistemas reales que
          permitan al usuario visualizar la teoría al resolver problemas reales.
          ¡Y NO ES NECESARIO UTILIZAR EQUIPOS MUY CAROS!
        featuredImage:
          type: ImageBlock
          url: /images/python.png
          altText: Item image
        actions:
          - type: Link
            label: Más Información
            altText: ''
            url: 'https://bit.ly/CertificationZ'
            showIcon: true
            icon: cart
            iconPosition: right
            elementId: ''
        styles:
          self:
            textAlign: left
            padding:
              - pt-4
              - pl-4
              - pr-4
              - pb-6
            borderRadius: medium
            borderColor: border-dark
            borderStyle: solid
            borderWidth: 1
    columns: 4
    enableHover: true
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-9
          - pb-9
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-a
    title: Nuestra Visión
    text: >
      Hacer que la robótica, tangible e intangible, sea accesible para cualquier
      ser humano, a través de educación minimalista y sencilla, a un costo
      reducido
    actions: []
    media:
      type: ImageBlock
      url: /images/vision.png
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-6
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
  - elementId: ''
    colors: colors-a
    title: Productos
    text: >
      Creamos y construimos robots (y sus subproductos) asequibles para
      cualquiera que desee desarrollarse en esta rama de la ingeniería :D
    actions:
      - type: Button
        label: MÁS INFORMACIÓN
        url: /products
        style: primary
        elementId: hero-main-button
        altText: zRobot 0.1
        iconPosition: right
        showIcon: true
        icon: arrowRightCircle
    media:
      type: ImageBlock
      url: /images/zrobot01.jpg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-6
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
  - type: FeatureHighlightSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Servicios
    subtitle: ''
    text: >
      Podemos apoyarte en el desarrollo de robots (algoritmos, hardware, diseño
      mecánico, etcétera) o si deseas entrenar a tus trabajadores en los
      fundamentos de robótica, programación, o cualquier disciplina relacionada
      ;)
    actions:
      - type: Button
        label: ¡CONTÁCTANOS!
        url: /contact
        style: primary
        altText: ¡Contáctanos!
        icon: arrowRightCircle
        iconPosition: right
        showIcon: true
    media:
      type: ImageBlock
      url: /images/robot design.png
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-6
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeaturedItemsSection
    colors: colors-e
    elementId: ''
    title: Algunos datos sobre nosotros
    subtitle: ♡
    items:
      - type: FeaturedItem
        featuredImage:
          type: ImageBlock
          url: /images/students.png
          altText: +700 estudiantes desde 2019
          caption: +700 estudiantes desde 2019
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
        title: 700+ estudiantes
        text: |
          ¡Y continuamos creciendo día con día!
      - type: FeaturedItem
        title: Presencia en 26 países
        text: |
          Más que multidisciplinarios, somos MULTINACIONALES :D
        featuredImage:
          type: ImageBlock
          url: /images/international.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
      - type: FeaturedItem
        title: 5+ años de experiencia
        text: >
          Comenzamos en 2017 sin saber hasta dónde llegaríamos, ¡y desde
          entonces no nos hemos detenido!
        featuredImage:
          type: ImageBlock
          url: /images/experience.png
          altText: Experience
          caption: Experience
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
    actions:
      - type: Link
        label: 'Y si no nos crees, revisa nuestras métricas públicas ;)'
        altText: ''
        url: 'https://www.udemy.com/user/z-dynamics/'
        showIcon: true
        icon: arrowRightCircle
        iconPosition: right
        elementId: ''
    columns: 3
    enableHover: true
    styles:
      self:
        height: auto
        width: wide
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
        justifyContent: center
        borderRadius: medium
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Stay tuned!
    text: |
      ¡Puedes confiar en nosotros! Solo te enviaremos información interesante :)
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: contact@zdynamics.org
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Correo electrónico
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: ¡Suscribirme!
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
---
