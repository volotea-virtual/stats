# Stats

stats is a javascript script used for displaying stats from vamsys to the Virtual Airline Website.

## Usage

Stats is hosted on vVolotea CDN at  http://cdn.volotea-virtual.it/stats/bundle.js
To use stats, include at the bottom of body, bunlke.js and then you can specify what stst to replace. You wikll need your VA UUID which is the key at the end of your Statistics URL from Orwell. AN Example UUIS is '44af8377-34f9-401a-aafe-5cfbc2cf8325'.

```html
<span id="total-pireps-stat"></span>
<script src="https://cdn.volotea-virtual.it/stats/bundle.js"></script>
<script>
  var stats = vamsysStats({
    uuid: "[YOUR_VA_UUID]"
  });

  stats.replace("total-pireps-stat").withVaStat(stats => stats.pireps.total);
</script>
```
The example above replaces the inner HTML of the element with the id `total-pireps-stat` with the total PIREPs statistic.

A full list of what statistics can be included can be found in the [statistics.ts](/src/types/statistics.ts) file. A full list of options that can be passed to the `vamsysStats` function can be
found in the [settings.ts](/src/types/settings.ts) file.

## Security

If you find a security issue with the script, please email `luca [a t] ahd-creative.agency`. You can encrypt your message using his key, available [here](https://cdn.volotea-virtual.it/artek.asc).