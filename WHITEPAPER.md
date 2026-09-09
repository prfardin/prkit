# why we create this ui library?

Since all developers need some tools to speed up their work, we came up with the idea of creating a framework based on UIkit that is structured in Vue, making it easier to implement the UI of our projects. in future we will also use ai to use this template to create ui.

For the core, we used the UIkit CSS framework because, unlike modern libraries, it offers many additional features like Slideshow, Parallax, and more.

Our goal is for this library to be a collection of Vue components and a set of ready-to-use pages.
This WHITE PAPER is still a work in progress.

# Vision

## what we are doing now?

we are making all project (css framework and vue components and starter kit) in one project and will separate them to our vision at last. 

## Visions
- PrKIt and Vue: Ui css framework with components based on PrKit
- Nuxt Starter based on PrKit Vue and have everything for start a front project
- we need also document pages for PrKit and PrKit Vue and Nuxt `Starter Kit`

# Roadmap

### icons
- [ ] add mx-icons to project
- [ ] add icon versions to icon-libraries

- [ ] create all vue component from `uikit` `shurikenui` `shadcn`
- [ ] create document hub for `PrKit` and `Vue`
- [ ] create page layouts and sidebar examples (`Theme`)
- [ ] create document hub for `Theme`
- [ ] create starter kit for `Nuxt`
- [ ] migrate to modern CSS rgb

## Tasklists (sub roadmap)
- [ ] we need make this project separate to 4 npm libraries:
  - icons libraries: *placed at __src/images/core__*
  - core theme components: *placed at __src/components/__ or __src/components/core__* (the ui framework)
  - documents: *placed at __src/views/docs__*
  - starter kit: *ready-to-use pages: including all pre-build pages and layouts, vite build, vite build scripts and etc*
- [ ] design it for **Nuxt** (starter kit)
- [ ] we need add a setting.css file for customizing the style of the main css like: changing global and main colors, changing fonts and changing default icons

## Notes
- we define all Uikit components in vue, but in documents if a document can be defined as css component we must mark down the code as a css also. (vue and css together) 
- add default icons to project, when it adds we can change all icon set with changing the default icon name attribute
- add Solar-Icon-Set outline to icons set: the different between regular set is outline wrote as path fillable and outline is wrote as a path line with ability to change line-stroke
- check aria-label html attribute and read the docs
- add uk-overflow-auto to utils and commit the type