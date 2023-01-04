<template>
  <section class="about">
    <!-- begin:: me -->
    <div id="me" class="p-4">
      <div class="container mx-auto">
        <h1 class="text-center text-2xl font-bold">About Me</h1>
        <div class="py-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div class="flex items-center">
              <div class="">
                <p class="text-justify">
                  Hello World !!! My name is Alan Saputra Lengkoan, can be called
                  Alan, Botak or Bagong. I am a Freelance Web Developer who lives
                  in Makassar. I graduated from one of the private universities
                  (STMIK Handayani Makassar). I usually spend my leisure time by
                  reading the latest technology's articles, language tutorial
                  exercise programming and watching anime. I am a guy who is open
                  to any challenges, problem solving, stay focused and do the
                  tasks consistently. Thank you !
                </p>
                <div class="flex justify-center sm:block">
                  <a href="./../src/assets/doc/CV-Alan-Saputra-Lengkoan-(2022).pdf" target="_blank"
                    class="flex justify-center items-center bg-background-tertiary hover:bg-gray-700 text-white font-bold py-2 px-2 w-36 sm:w-48 mt-10 mb-6 sm:mb-0 rounded shadow-lg duration-500">
                    <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
                    <span class="text-sm sm:text-lg px-2">Download CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="">
              <img src="./../assets/img/about-me.svg" alt="about me" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:me -->
    <!-- begin:: education -->
    <div id="education" class="p-4">
      <div class="container mx-auto">
        <h1 class="text-center text-2xl font-bold">Education</h1>
        <div class="grid-cols-9 py-4 text-light md:grid">
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-background-secondary col-start-1 col-end-5 my-4 rounded-xl p-4 shadow-md">
              <h3 class="mb-1 text-lg font-semibold">Elementary School (2003 - 2009)</h3>
              <p class="text-justify leading-tight">
                SMP Negeri 2 Anggrek
              </p>
            </div>
            <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="flex h-full w-6 items-center justify-center">
                <div class="pointer-events-none h-full w-1 bg-background-secondary"></div>
              </div>
              <div class="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-background-secondary shadow"></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="flex h-full w-6 items-center justify-center">
                <div class="pointer-events-none h-full w-1 bg-background-secondary"></div>
              </div>
              <div class="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-background-secondary shadow"></div>
            </div>
            <div class="bg-background-secondary col-start-6 col-end-10 my-4 rounded-xl p-4 shadow-md">
              <h3 class="mb-1 text-lg font-semibold">Junior High School (2009 - 2012)</h3>
              <p class="text-justify leading-tight">
                SMP Negeri 2 Anggrek
              </p>
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-background-secondary col-start-1 col-end-5 my-4 rounded-xl p-4 shadow-md">
              <h3 class="mb-1 text-lg font-semibold">Senior High School (2012 - 2015)</h3>
              <p class="text-justify leading-tight">
                SMA Negeri 5 Gorontalo Utara
              </p>
            </div>
            <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="flex h-full w-6 items-center justify-center">
                <div class="pointer-events-none h-full w-1 bg-background-secondary"></div>
              </div>
              <div class="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-background-secondary shadow"></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="flex h-full w-6 items-center justify-center">
                <div class="pointer-events-none h-full w-1 bg-background-secondary"></div>
              </div>
              <div class="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-background-secondary shadow"></div>
            </div>
            <div class="bg-background-secondary col-start-6 col-end-10 my-4 rounded-xl p-4 shadow-md">
              <h3 class="mb-1 text-lg font-semibold">College Student (2015 - 2019)</h3>
              <p class="text-justify leading-tight">
                Universitas Handayani Makassar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: education -->
    <!-- begin:: experience -->
    <div id="experience" class="p-4">
      <div class="container mx-auto">
        <h1 class="text-center text-2xl font-bold">Experience</h1>
        <div class="flex items-center justify-center py-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div class="max-w-sm overflow-hidden rounded-lg text-center bg-background-secondary shadow-lg">
              <img class="mx-auto w-40 py-5" src="./../assets/img/expe1.png" alt="Experience at one" />
              <div class="px-6 py-4">
                <h1 class="py-1 text-sm font-bold">
                  PT. Upana Pelopor Aplikasi Adikarya
                </h1>
                <h1 class="py-1 text-base font-bold">Back End Web Developer</h1>
                <p class="py-1 text-xs">Jun 2019 - Agt 2019</p>
              </div>
            </div>
            <div class="max-w-sm overflow-hidden rounded-lg text-center bg-background-secondary shadow-lg">
              <img class="mx-auto w-40 py-5" src="./../assets/img/expe2.png" alt="Experience at two" />
              <div class="px-6 py-4">
                <h1 class="py-1 text-sm font-bold">Dapurtani</h1>
                <h1 class="py-1 text-base font-bold">
                  Chief Technology Officier
                </h1>
                <p class="py-1 text-xs">Mei 2018 - Nov 2020</p>
              </div>
            </div>
            <div class="max-w-sm overflow-hidden rounded-lg text-center bg-background-secondary shadow-lg">
              <img class="mx-auto w-40 py-5" src="./../assets/img/expe3.png" alt="Experience at three" />
              <div class="px-6 py-4">
                <h1 class="py-1 text-sm font-bold">Freelancer</h1>
                <h1 class="py-1 text-base font-bold">Web Developer</h1>
                <p class="py-1 text-xs">Mar 2018 - Now</p>
              </div>
            </div>
            <div class="max-w-sm overflow-hidden rounded-lg text-center bg-background-secondary shadow-lg">
              <img class="mx-auto w-40 py-5" src="./../assets/img/expe4.png" alt="Experience at four" />
              <div class="px-6 py-4">
                <h1 class="py-1 text-sm font-bold">PT. Kumala Group</h1>
                <h1 class="py-1 text-base font-bold">Web / Mobile Developer</h1>
                <p class="py-1 text-xs">Mar 2020 - Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: experience -->
    <!-- begin:: activity -->
    <div id="activity" class="p-4">
      <div class="container mx-auto">
        <h1 class="text-center text-2xl font-bold">Activity</h1>
        <div class="py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div class="">
              <calendar-heatmap :values="values" :end-date="endDate" :style="{'width': '100%'}" :round="5"
                :range-color="rangeColor" />
            </div>

            <div class="">
              <div class="languages" ref="chartdiv"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: activity -->
  </section>
</template>

<style>
  .languages {
    height: 500px;
  }
</style>

<script>
  import axios from 'axios'
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  import {
    jsonp
  } from 'vue-jsonp'

  am4core.useTheme(am4themes_animated);

  import {
    CalendarHeatmap
  } from 'vue3-calendar-heatmap'

  export default {
    components: {
      CalendarHeatmap
    },
    data() {
      return {
        username: 'alanlengkoan',
        months: 12,
        ghToken: import.meta.env.VITE_GH_TOKEN,
        values: [],
        endDate: new Date(),
        orientation: 'horizontal',
        rangeColor: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      };
    },
    async mounted() {
      // begin:: github calender
      axios
        .post(
          "https://api.github.com/graphql", {
            query: `{
                user(login: "${this.username}") {
                  contributionsCollection {
                    contributionCalendar{
                      totalContributions,
                      weeks{
                        contributionDays{
                          date,
                          contributionCount
                        },
                      }
                    }
                  }
                }
              }`
          }, {
            headers: {
              Authorization: `Bearer ${this.ghToken}`
            }
          })
        .then(res => {
          // handle success
          const value = [];
          const data = res.data.data.user.contributionsCollection.contributionCalendar.weeks.slice(this.months - (12 *
            4))
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].contributionDays.length; j++) {
              if (data[i].contributionDays[j].contributionCount !== 0) {
                value.push({
                  date: data[i].contributionDays[j].date,
                  count: parseInt(data[i].contributionDays[j].contributionCount)
                })
              }
            }
          }
          this.values = value;
        });
      // end:: github calender

      // begin:: wakatime
      let urlWakatime = 'https://wakatime.com/share/@alanlengkoan/20e9ebcc-0a44-4ef4-afc4-5fae1df3f56d.json';
      await jsonp(urlWakatime, {
          param: 'callback'
        }).then(data => {
          let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
          chart.paddingRight = 20;
          chart.data = data.data;

          let b = chart.yAxes.push(new am4charts.CategoryAxis);
          b.renderer.grid.template.location = 0;
          b.dataFields.category = "name";
          b.renderer.minGridDistance = 1;
          b.renderer.inversed = !0;
          b.renderer.grid.template.disabled = !0;
          b.fontWeight = "bold";

          chart.xAxes.push(new am4charts.ValueAxis).min = 0;

          var a = chart.series.push(new am4charts.ColumnSeries);
          a.dataFields.categoryY = "name";
          a.dataFields.valueX = "percent";
          a.columns.template.tooltipText = "{valueX}%";
          a.columns.template.strokeOpacity = 0;
          a.columns.template.column.cornerRadiusBottomRight = 5;
          a.columns.template.column.cornerRadiusTopRight = 5;

          a.columns.template.adapter.add("fill", function (b, a) {
            return a.dataItem.dataContext.color
          });
          a.columns.template.adapter.add("stroke", function (b, a) {
            return a.dataItem.dataContext.color
          }),

          b.sortBySeries = a;
          this.chart = chart;
        })
        .catch(err => {
          console.log('error get data wakatime ' + err);
        });
      // end:: wakatime
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }
</script>