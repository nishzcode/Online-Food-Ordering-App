from flask import Flask,render_template,request,flash,session,jsonify,json
from flask_mysqldb import MySQL
from flask_cors import CORS,cross_origin
#from flask import jsonify

app = Flask(__name__)
#app.secret_key = 'ezfood1234'

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'ezfood'

mysql = MySQL(app)

@app.route('/cusRegister',methods=['POST'])
@cross_origin(supports_credentials=True)
def cusRegister():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        utype = "customer"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/login',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def login():
    
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        uname = userDetails['username']
        pswd = userDetails['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user where username =%s AND password = %s",(uname,pswd))
        data= cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                return jsonify(data)
        else:
                return jsonify('error')
        
        

@app.route('/addCashier',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addCashier():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        utype = "cashier"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addManager',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addManager():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        shop = userDetails['shop']
        utype = "manager"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype,shopid) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype,shop))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addFood',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addFood():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shop = userDetails['shopid']
        item = userDetails['itemname']
        itemdesc = userDetails['description']
        itemprice = userDetails['price']
        
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO fooditem(shopid,itemname,description,price) VALUES(%s,%s,%s,%s)",(shop,item,itemdesc,itemprice))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addRestaurant',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addRestaurant():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopname = userDetails['shopname']
        description = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO shops(shopname,description) VALUES(%s,%s)",(shopname,description))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addOffer',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addOffer():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        offertitle = userDetails['title']
        offerdesc = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO offers(title,description) VALUES(%s,%s)",(offertitle,offerdesc))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")


@app.route('/addToCart',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addToCart():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        item = userDetails['itemname']
        itemqty = userDetails['qty']
        itemprice = userDetails['unitprice']


        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO cart(itemname,qty,unitprice) VALUES(%s,%s,%s)",(item,itemqty,itemprice))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/placeOrder',methods=['POST'])
@cross_origin(supports_credentials=True)
def placeOrder():
    if request.method == 'POST':
        itemDetails = request.get_json(silent=True)
        items = itemDetails['items']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO orderdata(itemid) VALUES(%s)",[items])
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

    

@app.route('/viewRequests',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewRequests():
    if request.method == 'POST':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from requestdetails")
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/getFoodItems',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getFoodItems():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopy = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM fooditem where shopid = %s",[shopy])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/getShops',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getShops():
    if request.method == 'GET':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from shops")
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                #print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/getManagers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getManagers():
    if request.method == 'GET':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user u,shops s where usertype = 'manager' and u.shopid = s.shopid")
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/getCashiers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getCashiers():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shop = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user where usertype = 'cashier' and shopid = %s ",[shop])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                #print (data)
                return jsonify(data)
        else:
                return jsonify('error')


if __name__ == '__main__':
    app.run()