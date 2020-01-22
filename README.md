# @aacassandra/client-xlsx2json
First of all, Thank you so much for xlsx.js, this plugin make to easy for converting xlsx file to json object

## Install
```
npm i @aacassandra/client-xlsx2json
```
For vue project don't forget to add below to babel.config.js file
```
module.exports = {
  ...,
  sourceType: 'unambiguous'
};

```

## Usage
```
import xlsx2json from '@aacassandra/client-xlsx2json'

const examples = async (e) => {
  var files = e.target.files, f = files[0];
  let converting = await xlsx2json(files)
  console.log(converting)
}
```

## LICENSE
```
MIT License

Copyright (c) 2019 Alauddin Afif Cassandra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
```

read more about [LICENSE](https://github.com/aacassandra/client-xlsx2json/blob/master/LICENSE)
