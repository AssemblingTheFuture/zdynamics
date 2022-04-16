---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Productos
sections:
  - type: FeaturedItemsSection
    colors: colors-c
    elementId: ''
    title: Robótica Avanzada en Línea
    subtitle: Más allá de los libros y la aburrida teoría ;)
    items:
      - type: FeaturedItem
        title: Métodos Numéricos con Aplicaciones de Ingeniería
        text: >
          Las matemáticas son muy importantes para cualquier profesional, pero
          es esencial saber resolver problemas rápidamente cumpliendo los
          requisitos teóricos básicos
        featuredImage:
          type: ImageBlock
          altText: Métodos Numéricos con Aplicaciones de Ingeniería
          url: /images/numerics.png
        styles:
          self:
            textAlign: center
            borderRadius: medium
            borderWidth: 1
            borderStyle: solid
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
          type: ImageBlock
          url: /images/lorenz.png
          altText: Item image
        styles:
          self:
            textAlign: center
            borderRadius: medium
            borderWidth: 1
            borderStyle: solid
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
          type: ImageBlock
          url: /images/robotics.png
          altText: Robótica
        styles:
          self:
            textAlign: center
            borderRadius: medium
            borderWidth: 1
            borderStyle: solid
        actions:
          - type: Link
            label: Comprar ($5 USD)
            altText: ''
            url: 'https://bit.ly/RoboticZ'
            showIcon: true
            icon: cart
            iconPosition: right
            elementId: ''
    actions: []
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
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedItemsSection
    colors: colors-a
    elementId: ''
    title: Herramientas Digitales
    subtitle: >-
      Desarrollamos algunas librerías para que puedas utilizar en tus proyectos
      de robótica
    items:
      - type: FeaturedItem
        title: zRobotics 0.2
        text: >
          Un poderosa libreria para análisis de robots utilizando cuaterniones
          duales y Python. ¡Hecha por Mexicanos!
        featuredImage:
          type: ImageBlock
          url: /images/droidtocat.png
          altText: Item image
        styles:
          self:
            textAlign: center
            borderRadius: none
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        actions:
          - type: Link
            label: Descargar
            altText: ''
            url: 'https://github.com/AssemblingTheFuture/zRobotics'
            showIcon: true
            icon: github
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: zController 0.1 Beta
        text: >
          Este controlador es útil para sistemas dinámicos complejos o con
          incertidumbre, ya que su funcionamiento se basa solo en la
          realimentación de variables
        featuredImage:
          type: ImageBlock
          url: /images/roboticz.png
          altText: Item image
        styles:
          self:
            textAlign: center
            borderRadius: none
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        actions:
          - type: Link
            label: Descargar
            altText: ''
            url: 'https://github.com/AssemblingTheFuture/zController'
            showIcon: true
            icon: github
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: zRobot 0.1 Beta
        text: >
          El trabajo colaborativo hombre-máquina es parte de la nueva revolución
          industrial. Sus principios y pautas se basan en la convivencia directa
          del ser humano con los más modernos sistemas automáticos e
          inteligentes.
        featuredImage:
          type: ImageBlock
          url: /images/zrobot.gif
          altText: Item image
        styles:
          self:
            textAlign: center
            borderRadius: none
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        actions:
          - type: Button
            label: MÁS INFORMACIÓN
            altText: ''
            url: /blog/el-robot
            showIcon: true
            icon: arrowRightCircle
            iconPosition: right
            style: primary
            elementId: ''
    actions: []
    columns: 1
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
        borderRadius: medium
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedItemsSection
    colors: colors-e
    elementId: ''
    title: Programación Básica de Robots con Python
    subtitle: ¡EL MEJOR ENTRENAMIENTO PARA COMENZAR EN LA ROBÓTICA!
    items:
      - type: FeaturedItem
        text: >
          Enfocado a estudiantes y profesionales que busquen llevar a la
          práctica los conocimientos teóricos sobre esta hermosa disciplina
        featuredImage:
          type: ImageBlock
          url: /images/robot.gif
          altText: cobot-python
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
        actions:
          - type: Button
            label: MÁS INFORMACIÓN
            altText: ''
            url: 'https://bit.ly/CertificationZ'
            showIcon: true
            icon: arrowRightCircle
            iconPosition: right
            style: primary
            elementId: ''
    actions: []
    columns: 1
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
        borderRadius: medium
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
---
