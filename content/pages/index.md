---
title: Home
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
        icon: chevronLeft
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/hero.png
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
    colors: colors-f
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
          Las matemáticas son muy importantes en cualquier sector profesional,
          pero es esencial saber cómo resolver problemas rápidamente cumpliendo
          los requisitos teóricos básicos
        featuredImage:
          url: /images/faster.svg
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
      - type: FeaturedItem
        title: Control de Sistemas Dinámicos
        text: >
          Aunque muchos sistemas todavía se controlan con la estructura clásica
          de PID, es necesario modernizar y simplificar esto a través de
          funciones de aprendizaje basadas en criterios de estabilidad más
          confiables que la asignación de polos y ceros.
        featuredImage:
          url: /images/smarter.svg
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
      - type: FeaturedItem
        title: 'Robótica: de la Cinemática al Control'
        text: >
          Los robots se diseñan utilizando herramientas teóricas que no se
          enseñan en las aulas de Latinoamérica debido a su complejidad, ¡pero
          se puede aprender de forma muy sencilla!
        featuredImage:
          url: /images/focused.svg
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
          url: /images/faster.svg
          altText: Item image
        actions: []
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
          - pt-28
          - pb-28
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
    title: NUESTRA VISIÓN
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
          - pt-36
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
      Queremos crear y construir robots (y sus respectivos subproductos)
      asequibles para cualquier que desee desarrollarse como profesional en esta
      rama de la ingeniería :D
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
  - colors: colors-f
    subtitle: Algunos datos sobre nosotros
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/apple.svg
        altText: Apple
        caption: Apple
      - type: ImageBlock
        url: /images/google-play.svg
        altText: Google Play
        caption: Google Play
      - type: ImageBlock
        url: /images/playstation.svg
        altText: PlayStation
        caption: PlayStation
      - type: ImageBlock
        url: /images/gatsby.svg
        altText: Gatsby
        caption: Gatsby
      - type: ImageBlock
        url: /images/xbox.svg
        altText: Xbox
        caption: Xbox
      - type: ImageBlock
        url: /images/skype.svg
        altText: Skype
        caption: Skype
      - type: ImageBlock
        url: /images/zcool.svg
        altText: ZCOOL
        caption: ZCOOL
    spacing: 3
    columns: 7
    aspectRatio: auto
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
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
    imageSizePx: 240
    type: MediaGallerySection
  - type: FeaturedItemsSection
    colors: colors-f
    elementId: ''
    title: Algunos datos sobre nosotros
    subtitle: ♡
    items:
      - type: FeaturedItem
        featuredImage:
          type: ImageBlock
          url: /images/students-0d681fe1.png
          altText: +700 estudiantes desde 2019
          caption: +700 estudiantes desde 2019
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
        title: 700+ estudiantes desde 2019
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
          Comenzamos a emprender en 2017 sin saber hasta dónde llegaríamos, ¡y
          desde entonces no nos hemos detenido!
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
    actions: []
    columns: 4
    enableHover: false
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
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - elementId: ''
    colors: colors-a
    variant: variant-a
    testimonials:
      - quote: >
          Such a great experience to be using this product. It really helped
          with what I needed help with.
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Carla Rogers
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-28
          - pb-56
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
    type: TestimonialsSection
  - colors: colors-f
    elementId: ''
    title: FAQ
    items:
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
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
          - pt-20
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
    type: FaqSection
    actions: []
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
