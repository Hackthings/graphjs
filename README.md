# GraphJS

GraphJS is a Javascript client-side library to help developers easily enable social features on their web sites. GraphJS is built upon the [Phở framework](https://github.com/phonetworks/pho-microkernel), and it's open source. With only a few lines of code, you can easily add authentication, comments, messages, forum, groups, profiles etc. to your static web pages. 

GraphJS depends on [Riot.js](https://riot.js.org/). 

## Building

Make sure you have [npm](https://www.npmjs.com/) installed. Simply type in:

```sh
npm install # to install Riot.js and other dependencies
npm run build # to form graph.js file
```

After compilation, you will get a ```graph.js``` file which would be served through HTTPS. Then, you should include this file in all of your web pages where you want to take advantage of GraphJS functionality. 

## Getting Started

To get started with Graph.js, you need to include graph.js file (created above) to your project. Then you can initiate it with GraphJS.init function.

Example:
```html
<body>
    <script src="path/to/graph.js"></script>
    <script>
    GraphJS.init("{{YOUR-PUBLIC-ID}}", {
        host:  "{{URL-OF-GRAPHJS-INSTANCE}}",
        theme: "{{YOUR-THEME-PREFERENCE}}",
        color: "{{YOUR-COLOR-PREFERENCE}}",
        language: "{{YOUR-LANGUAGE-OF-CHOICE}}",
        defaultAvatar: "{{URL-TO-YOUR-DEFAULT-AVATAR}}"
    })
    </script>
</body>
```
The `init` function comes with multiple options:
* **host**: a URL pointing to your instance of [GraphJS-Server](https://github.com/phonetworks/graphjs-server) that's either installed on-premise (c/o https://youtu.be/K7bWKlT0k_g for an instructional video) or one that is hosted by https://graphjs.com (in which case the URL would be provided to you in the control panel)
* **theme**: either 'light' or 'dark'
* **color**: a string representing any color of your preference in HEX format
* **language**: current available options are en-US (English), fr-FR (French) in beta and tr-TR (Turkish). For more translations and languages, see Translations section below.
* **defaultAvatar**: either "gravatar" so all no-avatar accounts show with their [Gravatar](https://en.gravatar.com/) counterparts (if it exists) or a URL that points to your default avatar in png, gif or jpeg formats.

#### For more Information/Options/Examples, please go to [GraphJS official Documentation](https://graphjs.com/docs)

## Testing and Development

You can try your custom tags simply by editing the html files in the ```test``` directory. The files are self-explanatory, indicating what parts are to edit.

To test and develop, run ```npm run watch``` command. This command will start watching 
the library files, and the files in the test folder will be served automatically on 
your browser.

## Translations

Translation files can be found in the directory [/lib/language](https://github.com/phonetworks/graphjs/tree/master/lib/language). They are standard json files. Please make a pull request on our Github repo for us to include your contributions in the master branch.

To fetch the latest translations, run `git submodule foreach 'git pull origin master'`

## Conditional Building

If you're only using a certain parts of the Graph.js library, then the full compiled edition may be too bloated/heavy for your goals. As of version 1.18, Graph.js comes with a new feature that allows you to build a graph.js file with only the modules that you'd need. To achieve this, build it as follows:

`modules=authentication,feed npm run build`

where modules can be one or a combination of:

* blog
* comments
* feed
* forum
* groups
* members
* messages
* notifications
* profile
* star
* private
* stripe

Obviously, less modules you use, lighter the library becomes. Authentication is a common module that's always included.

## Tips & Tricks

* JS: it's the ```restart``` call which ensures that the "widget" is updated once the session status changes. See: private-content.tag for more information.
* CSS: To disable highlighting, use .disable-selection
* CSS: see the usage of .graphjs-loading and .graphjs-blocked classes in https://github.com/phonetworks/graphjs/blob/master/lib/tags/profile-followers.tag
* CSS: all tags to start with .graphjs-element. There is also .graphjs-root which is not CSS neutral.
* CSS: .graphjs-wallet for lists

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/phonetworks/graphjs/graphs/contributors"><img src="https://opencollective.com/risg/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/risg/contribute)]

#### Individuals

<a href="https://opencollective.com/risg"><img src="https://opencollective.com/risg/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/risg/contribute)]

<a href="https://opencollective.com/risg/organization/0/website"><img src="https://opencollective.com/risg/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/1/website"><img src="https://opencollective.com/risg/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/2/website"><img src="https://opencollective.com/risg/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/3/website"><img src="https://opencollective.com/risg/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/4/website"><img src="https://opencollective.com/risg/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/5/website"><img src="https://opencollective.com/risg/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/6/website"><img src="https://opencollective.com/risg/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/7/website"><img src="https://opencollective.com/risg/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/8/website"><img src="https://opencollective.com/risg/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/risg/organization/9/website"><img src="https://opencollective.com/risg/organization/9/avatar.svg"></a>

## License

GNU Affero General Public License v3.0, see [LICENSE](https://github.com/phonetworks/graphjs/blob/master/LICENSE).
