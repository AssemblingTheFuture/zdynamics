---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: ¿Quién @$@% somos?
sections:
  - type: HeroSection
    colors: colors-h
    title: We’re growing fast
    text: You should join us.
    media:
      type: ImageBlock
      url: /images/hero-4.jpg
      caption: Team meeting
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
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: flex-start
  - type: QuoteSection
    colors: colors-h
    quote: >-
      ## Being part of this team has been incredible. We’ve fill each other’s
      gaps, and we go to lunch together :)
    name: Carla Rogers
    title: Someone from the team
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - type: MediaGallerySection
    colors: colors-a
    title: ''
    subtitle: ''
    images:
      - type: ImageBlock
        url: /images/careers.jpg
        caption: Meeting room
        altText: People in the meeting room
      - type: ImageBlock
        url: /images/post-2.jpg
        caption: Team meeting
        altText: Team meeting
    columns: 2
    spacing: 3
    imageSizePx: 400
    aspectRatio: '1:1'
    showCaption: false
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
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: JobsSection
    colors: colors-a
    title: Open roles
    subtitle: ''
    jobLists:
      - type: JobList
        title: Product
        items:
          - type: JobListItem
            title: Director of product management
            location: San Francisco
            text: >-
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - type: Link
                label: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
      - type: JobList
        title: Engineering
        items:
          - type: JobListItem
            title: Head of engineering
            location: San Francisco
            text: >-
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - type: Link
                label: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
          - type: JobListItem
            title: Senior Backend Engineer
            location: Remote
            text: >-
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - type: Link
                label: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
      - type: JobList
        title: Sales
        items:
          - type: JobListItem
            title: Sales Development Representative
            location: San Francisco
            text: >-
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - type: Link
                label: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
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
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Not seeing the right role? Contact us
    text: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: address
          placeholder: Your home address
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
        width: wide
        margin:
          - mt-36
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
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
