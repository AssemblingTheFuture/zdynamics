---
title: El Robot
layout: PostLayout
date: '2019-12-19'
author: content/data/team/dianne-ameter.json
excerpt: >-
  Cuando se habla de robots colaborativos y trabajo humano, es necesario
  enfatizar que el trabajo realizado por máquinas tiene la función de apoyar a
  los trabajadores en actividades que son repetitivas, por lo que estas máquinas
  no reemplazan el trabajo humano, solo complementan sus capacidades. Su trabajo
  puede ser levantar objetos pesados, llegar a lugares lejanos para atender
  procesos peligrosos, etc.
featuredImage:
  type: ImageBlock
  url: /images/zrobot01.jpg
  altText: zRobot 0.1
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    title: Referencias
    subtitle: ''
    text: >
      <a id="1"> [1] Huelke, Michael (2019, February 07). Collaborative robots
      (COBOTS): Safe co-operation between human beings and robots. German Social
      Accident Insurance (DGUV). (Retrieved on 01/29/2018) </a>


      <Enter>


      <a id="2"> [2] Danish Standards Foundation (2016). ISO/TS 15066:2016,
      Robots and robotics devices – Collaborative robots. Copenhagen. (Retrieved
      on 01/29/2018)  </a>
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
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - elementId: ''
    variant: variant-c
    colors: colors-a
    title: Read next
    recentCount: 3
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
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: RecentPostsSection
---
#### ¿QUÉ ES UN ROBOT COLABORATIVO?

Los Robots Colaborativos (también conocidos como Cobots) **se definen como máquinas complejas que trabajan mano a mano con los seres humanos**. En un proceso de trabajo compartido, apoyan y ayudan al operador humano. \[[1](#1)]

Un robot colaborativo comparte un espacio de trabajo. Esto requiere un manipulador industrial, que pueda trabajar de forma segura y sin poner en peligro o dañar a los seres humanos. **Los robots diseñados para este propósito utilizan retroalimentación de fuerza / torque en sus articulaciones para detener su funcionamiento cuando ocurre una colisión** y, a menudo, están diseñados con bordes redondeados para minimizar los daños en caso de una posible colisión \[[2](#2)]

#### ¿QUÉ HACE ÚNICOS A LOS COBOTS?

Se han identificado múltiples requisitos para considerar un sistema automatizado como un cobot. **El diálogo es un factor necesario para la comunicación efectiva y el intercambio de información entre humanos y máquinas**. Este proceso de comunicación, basado en múltiples modalidades (por ejemplo, detección visual y táctil), se puede utilizar para hacer preguntas y evaluar la calidad de las tareas.

Con el tiempo, a medida que los robots dejen de ser herramientas pasivas para los humanos y se conviertan en colaboradores más sofisticados y automatizados, **la relación hombre-máquina cambiará para comenzar a parecerse a la interacción entre dos individuos**. Para permitir esto, se deben considerar dos aspectos técnicos:

*   Entradas o sensores que permiten al robot reconocer y adaptarse a la presencia de entidades humanas. El uso de sensores de fuerza solo en el manipulador es inadecuado, **se necesitan otros tipos como sensores de proximidad y cámaras capaces de controlar el sistema en función del espacio de trabajo**
*   Una interfaz hombre-máquina que permite una fácil comunicación entre las dos entidades. Se pueden utilizar medios, como sonido, instrucciones visuales, control por voz o una interfaz gráfica de usuario intuitiva.

#### COBOTS EN EL MERCADO MUNDIAL

Empresas de todo el mundo han comenzado a desarrollar robots que pueden trabajar de la mano del hombre, entre ellos ABB Robotics con su robot [IRB 14000 – YuMi®](https://new.abb.com/products/robotics/es/robots-colaborativos/yumi), lanzado en abril de 2015. Esta empresa se inclina hacia la automatización colaborativa, que depende de la programación de rutinas y control de sistemas robóticos, así como la inclusión de estos en el trabajo manual de los operadores en la planta.

![ABB IRB 14000 – YuMi®](https://www07.abb.com/images/librariesprovider89/default-album/robots/yumi/yumi-separator-1183px.jpg?sfvrsn=1)

<div style="text-align: center">ABB IRB 14000 – YuMi®</div>

Por otro lado, KUKA AG ha desarrollado un robot colaborativo denominado [LBR iiwa®](https://www.kuka.com/es-mx/productos-servicios/sistemas-de-robot/robot-industrial/lbr-iiwa) que utiliza tecnología de control inteligente, sensores de alto rendimiento y software de última generación, aportando así nuevas soluciones colaborativas en tecnologías de producción. Incluso las tareas más difíciles que antes se realizaban manualmente ahora se pueden automatizar de forma económica.

![KUKA LBR iiwa®](https://www.kuka.com/-/media/kuka-corporate/images/about-kuka/kuka-roboter-produkte.jpg?rev=-1\&w=1900\&hash=FE99E19AE978DC527E7EC22A2AED55E9)

<div style="text-align: center">KUKA LBR iiwa®</div>

Los cobots antes mencionados no utilizan celdas o jaulas especiales que aumenten su adquisición, ya que cuentan con sensores que evitan colisiones. Sin embargo, existen más productos de otras empresas como [Kinova, Inc](https://www.kinovarobotics.com/en); [Rethink Robotics GmbH](https://www.rethinkrobotics.com/), [Techman Robot, Inc.](https://www.tm-robot.com/en), etcétera, con soluciones novedosas que fomentan la sana competencia en esta Nueva Revolución Industrial.

#### Nuestro Cobot: zRobot 0.1 Beta

A pesar de que las grandes empresas están desarrollando y mejorando sus productos, decidimos conceptualizar, diseñar y fabricar un sistema asequible que podría usarse en entornos del mundo real debido a su flexibilidad, simplicidad, bajo consumo de energía y bajo costo.

![zRobot 0.1 Beta](https://preview--zdynamics-8c966.stackbit.dev/images/zrobot.gif)

En esta etapa inicial, estamos considerando que **el sistema de control del robot debe realizar cualquier tarea programada, incluso si hay perturbaciones o cualquier movimiento no deseado que pueda afectar su dinámica**. Además, el diseño del robot es flexible, por lo que **puede ser rediseñado, fabricado y adaptado para realizar diferentes tareas con cargas, movimientos y velocidades variables**.

<div class="sketchfab-embed-wrapper"; style="text-align: center">

<iframe title="zRobot 1.0" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="700" height="700" src="https://sketchfab.com/models/774702d30f8d46b8aa932ef702339017/embed?ui_theme=dark"> 
</iframe>

<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
<a href="https://sketchfab.com/3d-models/zrobot-10-774702d30f8d46b8aa932ef702339017?utm_medium=embed&utm_campaign=share-popup&utm_content=774702d30f8d46b8aa932ef702339017" target="_blank" style="font-weight: bold; color: #1CAAD9;"> zRobot 1.0 </a> by <a href="https://sketchfab.com/dzentenol?utm_medium=embed&utm_campaign=share-popup&utm_content=774702d30f8d46b8aa932ef702339017" target="_blank" style="font-weight: bold; color: #1CAAD9;"> dzentenol </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=774702d30f8d46b8aa932ef702339017" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p>

</div>

Además, este sistema tiene un cerebro impulsado por Raspberry Pi, también tiene una [librería](https://github.com/AssemblingTheFuture/zRobotics) que permite al cliente configurar su robot, como la ruta a seguir, la velocidad del efector final, el número de articulaciones activas, etc. Es simple, minimalista y está codificado con Python.

#### El Controlador: zController 0.1 Beta

Los continuos aumentos de la productividad han permitido un crecimiento sostenido de la fabricación, con la automatización jugando un papel clave. El crecimiento futuro requiere extender la automatización a aplicaciones que han demostrado ser difíciles de automatizar debido a entornos complejos e impredecibles. Estas aplicaciones pueden beneficiarse de la naturaleza flexible de los sistemas de control, pero la baja precisión de los controladores industriales ha limitado su implementación. Así, **los avances en detección, modelado y control han permitido incrementar la precisión de los controladores y estas tecnologías los hacen receptivos a entornos ruidosos y dinámicos**.

Por eso se desarrolló este novedoso controlador, para que haya un trabajo en armonía entre un proceso (o máquina) y un ser humano. Con esto, ambas partes trabajan como socios colaborando para realizar tareas y lograr objetivos comunes. **En lugar de que un supervisor le dé órdenes a un controlador, este último autoajusta sus variables internas para lograr más necesidad de control externo, ¡incluso si hay algún tipo de perturbación!** Por lo tanto, la fuerza de trabajo humana es un recurso para el controlador, que proporciona información como otros módulos del sistema.

Debido a la complejidad del proyecto, **publicaremos información relevante al respecto, como la forma en que conceptualizamos la idea principal, la primera propuesta de diseño y temas avanzados relacionados con el diseño mecánico, cinemática, dinámica y programación**. Poco a poco podrás profundizar en el conocimiento de este asombroso sistema, por eso te invitamos a mantenerte en contacto enviándonos un correo o suscribiéndote a nuestra newsletter.