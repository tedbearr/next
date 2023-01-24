// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    monitoring: {
      project_id: 1,
      terminal_type: 1,
      terminal_sn: "SN_Nutech",
      terminal_id: ["501", "551"],
      time_generated: "2023-01-13 23:00:00",
      component: {
        reader: [
          {
            sn: "SN_Perangkat",
            device_merek: "kenetics / DE-AFCM / DE-ABCM / DE-630 / NFC-PAD",
            firmware_version: "xxxx",
            status: 0,
            direction: 1,
            part: {
              SAM_BNI: 0,
              SAM_BCA: 0,
              SAM_BRI: 0,
              SAM_Mandiri: 0,
              SAM_KMT: 0,
              SAM_THB: 0,
              SAM_DKI: 0,
            },
          },
          {
            sn: "SN_Perangkat",
            firmware_version: "xxxx",
            status: 0,
            direction: 2,
            part: {
              SAM_BNI: 0,
              SAM_BCA: 0,
              SAM_BRI: 0,
              SAM_Mandiri: 0,
              SAM_KMT: 0,
              SAM_THB: 0,
              SAM_DKI: 0,
            },
          },
        ],
        barcode_scanner: [
          {
            sn: "xxxx",
            status: 0,
            direction: 1,
          },
          {
            sn: "xxxx",
            status: 0,
            direction: 2,
          },
        ],
        epc: {
          sn: "xxxx",
          status: 0,
          memory_usage: 30,
          cpu_usage: 5,
          storage_cap: 650,
          storage_usage: 250,
          storage_unit: "MB",
          os_version: "windows Embbeded 7 / Linux ",
          timezone: "",
          os_time_now: "",
        },
        controller: {
          sn: "xxxx",
          status: 0,
          duty_cycle: 1000000,
          temperature: 30,
          humidity: 69,
          security_status: 0,
        },
      },
      application: [
        {
          main_app_version: "xxxxx",
          status: 0,
          app_code: "gatein",
        },
        {
          main_app_version: "xxxxx",
          status: 0,
          app_code: "gateout",
        },
        {
          main_app_version: "xxxxx",
          status: 0,
          app_code: "syncronizer",
          comment:
            "status: is Running, close, not responding, multiple running",
        },
      ],
      database: {
        db_version: "",
        db_size: "",
        db_time_now: "",
      },
      syncronizer: [
        {
          last_sync: "",
          syncronize_type: "master / transaksi",
          sync_status: 0,
          sync_comment:
            "Status bersifat global pertipe sync, jika ada yang gagal diset error",
        },
      ],
    },
    ota: {
      application: [
        {
          main_app_version: "xxxxx",
          app_code: "gatein",
          path: "x.xxxx",
          version: "",
          checksum: "xxxx",
          date_modified: "",
          status: 0,
          library: [
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
          ],
        },
        {
          main_app_version: "xxxxx",
          app_code: "gateout",
          path: "x.xxxx",
          version: "",
          checksum: "xxxx",
          date_modified: "",
          status: 0,
          library: [
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
            {
              name: "xxxx",
              path: "x.xxxx",
              version: "",
              checksum: "xxxx",
              date_modified: "",
            },
          ],
        },
      ],
    },
  });
}
