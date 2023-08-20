<template>
  <main class="index">
    <div class="container">
       <a href="javascript:void(0)" class="back f4" @click="$router.back()">Back</a>
      <img :src="document.previewimage.url" class="img-fluid" :alt="document.previewimage.alt" />
      <div class="f3 pt3">{{ $prismic.asText(document.title) }}</div>
      <div v-for="(slice, index) in document.body" :key="index">
        <!-- {{ slice.slice_type }} -->
        <ImageWithCaptionSlice v-if="slice.slice_type == 'image_with_caption'" :data="slice" />
        <MusicSlice v-if="slice.slice_type == 'music'" :data="slice" />
        <QuoteSlice v-if="slice.slice_type == 'quote'" :data="slice" />
        <TextSlice v-if="slice.slice_type == 'text'" :data="slice" />
        <VideoSlice v-if="slice.slice_type == 'video'" :data="slice" />
      </div>
    </div>
  </main>
</template>

<script>
import ImageWithCaptionSlice from "@/components/slices/ImageWithCaptionSlice";
import MusicSlice from "@/components/slices/MusicSlice";
import QuoteSlice from "@/components/slices/QuoteSlice";
import TextSlice from "@/components/slices/TextSlice";
import VideoSlice from "@/components/slices/VideoSlice";

export default {
  components: {
    ImageWithCaptionSlice,
    MusicSlice,
    QuoteSlice,
    TextSlice,
    VideoSlice,
  },
  async asyncData ({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID("post", params.uid)).data;
      return {
        document,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
/**
 * {
   "title":[
      {
         "type":"heading1",
         "text":"Wochenprogramm 3",
         "spans":[

         ]
      }
   ],
   "date":"2020-07-02",
   "previewimage":{
      "dimensions":{
         "width":1000,
         "height":1000
      },
      "alt":null,
      "copyright":null,
      "url":"https://images.prismic.io/rochaderochade/856c5e91-5f9b-40a6-b032-a98ccd81c5ca_Wochenprogramm_juli3_2.png?auto=compress,format",
      "lowres":{
         "dimensions":{
            "width":700,
            "height":700
         },
         "alt":null,
         "copyright":null,
         "url":"https://images.prismic.io/rochaderochade/856c5e91-5f9b-40a6-b032-a98ccd81c5ca_Wochenprogramm_juli3_2.png?auto=compress,format&rect=0,0,1000,1000&w=700&h=700"
      }
   },
   "body":[
      {
         "slice_type":"image_with_caption",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "image":{
               "dimensions":{
                  "width":1200,
                  "height":1200
               },
               "alt":null,
               "copyright":null,
               "url":"https://images.prismic.io/rochaderochade/856c5e91-5f9b-40a6-b032-a98ccd81c5ca_Wochenprogramm_juli3_2.png?auto=compress,format&rect=0,0,1000,1000&w=1200&h=1200"
            },
            "caption":[
               {
                  "type":"heading3",
                  "text":"Bildtitel",
                  "spans":[

                  ]
               }
            ]
         }
      },
      {
         "slice_type":"text",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "text":[
               {
                  "type":"paragraph",
                  "text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ",
                  "spans":[
                     {
                        "start":0,
                        "end":5,
                        "type":"strong"
                     },
                     {
                        "start":28,
                        "end":38,
                        "type":"em"
                     }
                  ]
               },
               {
                  "type":"paragraph",
                  "text":"Rochade.org",
                  "spans":[
                     {
                        "start":0,
                        "end":11,
                        "type":"hyperlink",
                        "data":{
                           "link_type":"Web",
                           "url":"https://rochade.org"
                        }
                     }
                  ]
               }
            ]
         }
      },
      {
         "slice_type":"image_with_caption",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "image":{
               "dimensions":{
                  "width":1200,
                  "height":1200
               },
               "alt":null,
               "copyright":null,
               "url":"https://images.prismic.io/rochaderochade/856c5e91-5f9b-40a6-b032-a98ccd81c5ca_Wochenprogramm_juli3_2.png?auto=compress,format&rect=0,0,1000,1000&w=1200&h=1200"
            },
            "caption":[
               {
                  "type":"heading3",
                  "text":"Das Wochenprogramm Bild 1",
                  "spans":[

                  ]
               }
            ]
         }
      },
      {
         "slice_type":"quote",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "quote":[
               {
                  "type":"paragraph",
                  "text":"Super Fancy Quote! Der Event war mega geil!",
                  "spans":[

                  ]
               }
            ]
         }
      },
      {
         "slice_type":"text",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "text":[
               {
                  "type":"paragraph",
                  "text":"Ein weiterer Text",
                  "spans":[
                     {
                        "start":0,
                        "end":17,
                        "type":"strong"
                     }
                  ]
               },
               {
                  "type":"paragraph",
                  "text":" ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                  "spans":[
                     {
                        "start":23,
                        "end":33,
                        "type":"em"
                     }
                  ]
               },
               {
                  "type":"paragraph",
                  "text":"Rochade.org",
                  "spans":[
                     {
                        "start":0,
                        "end":11,
                        "type":"hyperlink",
                        "data":{
                           "link_type":"Web",
                           "url":"https://rochade.org"
                        }
                     }
                  ]
               }
            ]
         }
      },
      {
         "slice_type":"video",
         "slice_label":null,
         "items":[
            {

            }
         ],
         "primary":{
            "video":{

            }
         }
      }
   ]
}
 */
</script>
