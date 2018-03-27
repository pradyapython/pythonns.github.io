//current energy consumption update picture
function update_member_profit(status) {
    $("#member_profit").text(String(status));
}

function update_customer_order(status) {
    $("#customer_order").text(String(status));
}

function update_id(input,status) {
    $("#"+input).text(String(status));
}


$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyCa9i5W4DRaLgChzHxUzIgJR1ONaECtuEs",
      authDomain: "python-nk.firebaseapp.com",
      databaseURL: "https://python-nk.firebaseio.com",
      projectId: "python-nk",
      storageBucket: "python-nk.appspot.com",
      messagingSenderId: "970197289943"
  };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_member_profit(parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var customer_orderRef = firebase.database().ref("customer");

    customer_orderRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'customer_order') {
            update_customer_order(parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });


var issue_reportRef = firebase.database().ref("issue");

issue_reportRef.on("child_changed", function(data) {
    console.log(data.key);
    console.log(data.val());
    if(data.key == "1PV221445K1200100") {
        total_load_activePower  = data.val().load_activePower;
    } else if (data.key == 'issue_report') {
        update_id(data.key,parseInt(data.val()));
    } else {
        console.log("need to parse this key " + data.key)
    }
  });

var ipo_marginRef = firebase.database().ref("ipo");

  ipo_marginRef.on("child_changed", function(data) {
      console.log(data.key);
      console.log(data.val());
      if(data.key == "1PV221445K1200100") {
          total_load_activePower  = data.val().load_activePower;
      } else if (data.key == 'ipo_margin') {
          update_id(data.key,parseInt(data.val()));
      } else {
          console.log("need to parse this key " + data.key)
      }
    });

var yearly_paymentRef = firebase.database().ref("payment");

      yearly_paymentRef.on("child_changed", function(data) {
          console.log(data.key);
          console.log(data.val());
          if(data.key == "1PV221445K1200100") {
              total_load_activePower  = data.val().load_activePower;
          } else if (data.key == 'yearly_payment') {
              update_id(data.key,parseInt(data.val()));
          } else {
              console.log("need to parse this key " + data.key)
          }
        });

var all_logisticRef = firebase.database().ref("logistic");

      all_logisticRef.on("child_changed", function(data) {
          console.log(data.key);
          console.log(data.val());
          if(data.key == "1PV221445K1200100") {
              total_load_activePower  = data.val().load_activePower;
          } else if (data.key == 'all_logistic') {
              update_id(data.key,parseInt(data.val()));
          } else {
              console.log("need to parse this key " + data.key)
          }
        });

var trans_incRef = firebase.database().ref("trans");

      trans_incRef.on("child_changed", function(data) {
          console.log(data.key);
          console.log(data.val());
          if(data.key == "1PV221445K1200100") {
              total_load_activePower  = data.val().load_activePower;
          } else if (data.key == 'trans_inc') {
              update_id(data.key,parseInt(data.val()));
          } else {
              console.log("need to parse this key " + data.key)
          }
        });

var rev_incRef = firebase.database().ref("rev");

      rev_incRef.on("child_changed", function(data) {
          console.log(data.key);
          console.log(data.val());
          if(data.key == "1PV221445K1200100") {
              total_load_activePower  = data.val().load_activePower;
          } else if (data.key == 'rev_inc') {
              update_id(data.key,parseInt(data.val()));
          } else {
              console.log("need to parse this key " + data.key)
          }
        });



});
