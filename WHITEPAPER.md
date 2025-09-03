# why we create this ui library?

Since all developers need some tools to speed up their work, we came up with the idea of creating a framework based on UIkit that is structured in Vue, making it easier to implement the UI of our projects.

For the core, we used the UIkit CSS framework because, unlike modern libraries, it offers many additional features like Slideshow, Parallax, and more.

Our goal is for this library to be a collection of Vue components and a set of ready-to-use pages.
This WHITE PAPER is still a work in progress.

از اوجایی که همه ی برنامه نویس ها به یک سری اابزار برای سریع تر شدن کارشون نیاز دارن ما ایده ی ایجاد یک فریمورک بر پایه uikit که تو ساختار Vue باشه و کارهامون برای پیاده سازی UI پروژه هامون راحت تر کنه.
برای Core ما از CSS Framework UIkit استفاده کردیم چون فکر میکنیم بر خلاف کتابخونه های امروزی خیلی قابلیت های دیگه مثل Slideshow, Parallax و ... رو داره.
ما قصدمون اینه که این کتابخونه مجموعه از Vue Component ها باشه و مجوعه ای از Page های آماده که قابل استفاده باشه.
این WHITEPAPER هنوز تکمیل نشده.

# important notes and must change

## Tasklists
- [ ] we need make this project separate to 4 npm libraries:
  - icons libraries: *placed at __src/images/core__*
  - core theme components: *placed at __src/components/__ or __src/components/core__* (the ui framework)
  - documents: *placed at __src/views/docs__*
  - starter kit: *ready-to-use pages: including all pre-build pages and layouts, vite build, vite build scripts and etc*
- [ ] design it for **Nuxt** (starter kit)

### icons
- [ ] huge icons: ***duotone*** need to define class for making it colorable
- [ ] huge icons: ***twotone*** need to define class for making it colorable

# Vision

## what we are doing now?

we are making all project (css framework and vue components and starter kit) in one project and will separate them to our vision at last. 

## Visions
- PrKIt and Vue: Ui css framework with components based on PrKit
- Nuxt Starter based on PrKit Vue and have everything for start a front project
- we need also document p age for PrKit and PrKit Vue and Nuxt `Starter Kit`

# Roadmap

- [ ] create all vue component from `uikit`
- [ ] create all vue component from `shurikenui`
- [ ] create document hub for `PrKit` and `Vue`
- [ ] create page layouts and sidebar examples (`Theme`)
- [ ] create document hub for `Theme`
- [ ] create starter kit for `Nuxt`