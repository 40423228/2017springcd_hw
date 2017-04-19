var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","title":"About","tags":"misc","url":"./pages/about/"},{"text":"20170419W9期中協同查驗與自評 一. Fossil Server 實習查驗 fossil_bg7 二. 四連桿機構協同 Trace Point 查驗 參考的網際程式 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/w9/0419-2.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 影片: 40423228機械設計-協同產品設計課程W9-mission2 from 40423228 on Vimeo . 三. Fourbar Walker OnShape 零件協同繪圖與組立查驗 影片: 40423228機械設計-協同產品設計課程W9-mission3 from 40423228 on Vimeo . 40423228機械設計-協同產品設計課程W9-mission3-動畫 from 40423228 on Vimeo .","title":"2017/04/19 W9","tags":"Course","url":"./W9.html"},{"text":"20170405W7上課內容 一. 利用fossil對倉儲進行管理 對fossil管理的指令: fossil clone uri foo.fossil fossil open ./../../foo.fossil (開啟) fossil add . fossil remote-url off (將自動推送改為手動，這是與git不同之處，fossil會自動推送) fossil push https://user@192.168.X.XX (IP可用ipconfig/all找到) 二. 利用Onshape繪製八連桿 影片: (1).零件 20170405 part1 from 40423228 on Vimeo . (2).零件 20170405 part2 from 40423228 on Vimeo . (3).組合 20170405 part3 from 40423228 on Vimeo . (4).組合 20170405 part4 from 40423228 on Vimeo .","title":"2017/04/05 W7","tags":"Course","url":"./W7.html"},{"text":"20170329W6上課內容 一. 利用Onshape的變數指令繪製四連桿並匯入V-rep 影片: 20170329四連桿 from 40423228 on Vimeo .","title":"2017/03/29 W6","tags":"Course","url":"./W6.html"},{"text":"20170322W5上課內容 一. fossil筆記倉儲主頁顯示作業 二. 將單連桿轉入V-rep並使其作動 (1).把零件拆開 (2).加入旋轉軸，並設定尺寸 (3).將旋轉軸與軸定位在同一位子 (4).設定從屬關係 →將旋轉軸拉到底座下 →將上方桿子拉至旋轉軸下 (5).設定旋轉軸素質 →設定角速度 →將上方的桿子設定為動態物件 (6).讓我們繪製的軸不要顯示於頁面 三 將四連桿轉入V-rep並使其作動 作法與單連桿相近，差別在於多加入了Dummy 影片: 20170322 單連桿vrep作動 from 40423228 on Vimeo . 0322 四連桿 part1 from 40423228 on Vimeo . 20170322 四連桿 part2 from 40423228 on Vimeo .","title":"2017/03/22 W5","tags":"Course","url":"./W5.html"},{"text":"20170315W4上課內容 一. 建立各組協同主機 2017springcd_bg7： bg7 二. 在OnShape繪出單連桿機構並轉成STL Onshape單連桿機構 三. 在SolveSpace繪出單連桿機構並轉成STL 影片: 0315單連桿-OnShape from 40423228 on Vimeo . 0315單連桿-SolveSpace from 40423228 on Vimeo .","title":"2017/03/15 W4","tags":"Course","url":"./W4.html"},{"text":"20170308W3上課內容 一. 至 課程網頁 w3 Hyperworks 處瀏覽 10 個影片, 選兩個影片, 寫出該影片的英文逐字稿 Hyperworks1 Hyperworks2 Hyperworks3 Hyperworks4 Hyperworks 14-1 Hyperworks 14-2 Hyperworks 14-3 Hyperworks 14-4 Hyperworks 14-5 Hyperworks 14-6 影片擇二翻譯 二. Solvespace 30-50-60 cm 比例的四連桿組立，並轉出 stl 檔案，以 import 方式轉入 V-rep 先至 課程倉儲 下載\"fourbarlinkage\" 開啟SolveSpace畫 開啟fourbarlinkage裡的 link_30、link_50、link_60 並依序組裝形成四連桿 三. Onshape 完成與第二點相同尺寸之四連桿機構, 以 stl 轉出 (或其他格式) 後, 再轉入 V-rep 四. 在 50 連桿上加上 50-50-50 正三角形, 以 Solvespace 輸入該三角形頂點運動軌跡 五. 驗證上述四連桿運動軌跡, 是否正確, 並在分組網頁中執行該四連桿機構的運動模擬 from math import pi , cos , sin , sqrt , acos radian = 180 / pi degree = pi / 180 #PLAP def plap ( ax , ay , ac , bac , bx , by , pos ): if pos == 0 : cx = ac * cos ( bac - acos (( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 + abs ( ax - bx ) ** 2 - abs ( ay - by ) ** 2 ) / ( 2 * sqrt ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 ) * abs ( ax - bx )))) + ax cy = ac * sin ( bac - acos (( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 + abs ( ax - bx ) ** 2 - abs ( ay - by ) ** 2 ) / ( 2 * sqrt ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 ) * abs ( ax - bx )))) + ay else : cx = ac * cos ( bac + acos (( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 + abs ( ax - bx ) ** 2 - abs ( ay - by ) ** 2 ) / ( 2 * sqrt ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 ) * abs ( ax - bx )))) + ax cy = ac * sin ( bac + acos (( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 + abs ( ax - bx ) ** 2 - abs ( ay - by ) ** 2 ) / ( 2 * sqrt ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 ) * abs ( ax - bx )))) + ay return cx , cy #PLLP def pllp ( ax , ay , ac , cb , bx , by , pos ): if pos == 0 : cx = - (( ay - by ) * ( - ac ** 2 * ay + ac ** 2 * by + ax ** 2 * ay + ax ** 2 * by - 2 * ax * ay * bx - 2 * ax * bx * by + ay ** 3 - ay ** 2 * by + ay * bx ** 2 - ay * by ** 2 + ay * cb ** 2 + bx ** 2 * by + by ** 3 - by * cb ** 2 - sqrt (( - ac ** 2 + 2 * ac * cb + ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 - cb ** 2 ) * ( ac ** 2 + 2 * ac * cb - ax ** 2 + 2 * ax * bx - ay ** 2 + 2 * ay * by - bx ** 2 - by ** 2 + cb ** 2 )) * ( ax - bx )) + ( ac ** 2 - ax ** 2 - ay ** 2 + bx ** 2 + by ** 2 - cb ** 2 ) * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) / ( 2 * ( ax - bx ) * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) cy = ( - ac ** 2 * ay + ac ** 2 * by + ax ** 2 * ay + ax ** 2 * by - 2 * ax * ay * bx - 2 * ax * bx * by + ay ** 3 - ay ** 2 * by + ay * bx ** 2 - ay * by ** 2 + ay * cb ** 2 + bx ** 2 * by + by ** 3 - by * cb ** 2 + sqrt (( - ac ** 2 + 2 * ac * cb + ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 - cb ** 2 ) * ( ac ** 2 + 2 * ac * cb - ax ** 2 + 2 * ax * bx - ay ** 2 + 2 * ay * by - bx ** 2 - by ** 2 + cb ** 2 )) * ( - ax + bx )) / ( 2 * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) else : cx = - (( ay - by ) * ( - ac ** 2 * ay + ac ** 2 * by + ax ** 2 * ay + ax ** 2 * by - 2 * ax * ay * bx - 2 * ax * bx * by + ay ** 3 - ay ** 2 * by + ay * bx ** 2 - ay * by ** 2 + ay * cb ** 2 + bx ** 2 * by + by ** 3 - by * cb ** 2 + sqrt (( - ac ** 2 + 2 * ac * cb + ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 - cb ** 2 ) * ( ac ** 2 + 2 * ac * cb - ax ** 2 + 2 * ax * bx - ay ** 2 + 2 * ay * by - bx ** 2 - by ** 2 + cb ** 2 )) * ( ax - bx )) + ( ac ** 2 - ax ** 2 - ay ** 2 + bx ** 2 + by ** 2 - cb ** 2 ) * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) / ( 2 * ( ax - bx ) * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) cy = ( - ac ** 2 * ay + ac ** 2 * by + ax ** 2 * ay + ax ** 2 * by - 2 * ax * ay * bx - 2 * ax * bx * by + ay ** 3 - ay ** 2 * by + ay * bx ** 2 - ay * by ** 2 + ay * cb ** 2 + bx ** 2 * by + by ** 3 - by * cb ** 2 + sqrt (( - ac ** 2 + 2 * ac * cb + ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 - cb ** 2 ) * ( ac ** 2 + 2 * ac * cb - ax ** 2 + 2 * ax * bx - ay ** 2 + 2 * ay * by - bx ** 2 - by ** 2 + cb ** 2 )) * ( ax - bx )) / ( 2 * ( ax ** 2 - 2 * ax * bx + ay ** 2 - 2 * ay * by + bx ** 2 + by ** 2 )) return cx , cy ax = - 60 ay = 0 bx = 0 by = 0 bac = 50 * degree ac = 30 cd = 50 db = 60 ce = 50 ed = 50 cx , cy = plap ( ax , ay , ac , bac , bx , by , 0 ) print ( \"cx=\" , cx , \"cy=\" , cy ) dx , dy = pllp ( cx , cy , cd , db , bx , by , 0 ) print ( \"dx=\" , dx , \"dy=\" , dy ) ex , ey = pllp ( cx , cy , ce , ed , dx , dy , 0 ) print ( \"ex=\" , ex , \"ey=\" , ey ) 第二週心得 這周各組要從10部影片裡找出兩部翻譯，才發現自己英文的聽力十分不足，幾乎每句都聽不懂，希望能盡快補足英文聽力的能力。 第三週影片 任務二 Solvespace 30-50-60 cm 比例的四連桿組立 from 40423228 on Vimeo . 任務三 Onshape 完成與第二點相同尺寸之四連桿機構 from 40423228 on Vimeo . 任務四、五 四連桿軌跡圖 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo .","title":"2017/03/08 W3","tags":"Course","url":"./W3.html"},{"text":"20170301W2上課內容 一. 利用python找出缺課人員 程式碼可至 課程倉儲 下載 \"cd_w2.py\"座位程式碼，\"w2b_cadlab.txt\"座位表 座位程式碼 import os 讀取w2b_cadlab.txt的檔案將其儲存為adata，並設定encoding為utf-8 adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() 讀取w2b_registered.txt的檔案將其儲存為rdata，並一行一行隔開，並設定encoding為utf-8 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() 列印出adata，以便檢查結果 print(adata) 利用splitlines將adata一行一行隔開並其儲存為alist alist = adata.splitlines() 列印出alist[2]，以便檢查結果 print(alist[2]) 將變數n儲存為0 n = 0 將列從0開始算起 row = 0 將final_list儲存為一個空的數列 final_list = [] 將w2_list儲存為一個空的數列 w2_list = [] 執行一個for迴圈從第二列開始 for stud_num in alist[2:]: #每執行完一次迴圈列數+1 row = row + 1 #執行完迴圈後用\\將其隔開並儲存為blist blist = stud_num.split(\"\\t\") #列印出blist，以便檢查結果 #print(blist) #將行從0開始算起 column = 0 #執行一個for迴圈去取得blist裡的數列 for i in range(len(blist)): #每執行完一次迴圈行數+1 column = column + 1 #假如blist數列裡不是空白 if blist[i] != \"\": #列印出blist[i]，以便檢查結果 #print(blist[i]) #將組序有用_隔開的儲存為clist clist = blist[i].split(\" \") #將組序+ +學號+ +列+行的資料儲存為stud_data stud_data = clist[0]+\" \"+clist[1]+\" \"+str(row)+\" \"+str(column) #將stud_data結果附加在final_list的資料裡 final_list.append(stud_data) #將clist[1]結果附加在w2_list的資料裡 w2_list.append(clist[1]) #每執行完一次迴圈n+1 n = n +1 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) 列印出分組名單 print(\"分組名單:\") 執行一個for迴圈去取得group_list裡的數列 for i in range(len(group_list)): #列印出 group_list[i]的資料 print(group_list[i]) 列印出座位列表 print(\"座位列表:\") 執行一個for迴圈去取得final_list裡的數列 for i in range(len(final_list)): #列印出 final_list[i]的資料 print(final_list[i]) 執行一個for迴圈去取得rdata裡的數列 for i in range(len(rdata)): #假如有在rdata裡但沒有在w2_list裡，目的在找出缺席學生 if rdata[i] not in w2_list: #列印出 rdata[i]的資料，缺席學生 print(\"缺席學生:\", rdata[i]) 列印出學生總數n個 print(\"學生總數:\", n) print(os.environ) 二. 利用 Solvespace 進行四連桿機構組立並轉為st檔 先至 課程倉儲 下載\"fourbarlinkage\" 開啟SolveSpace畫 開啟fourbarlinkage裡的 link_30、link_50、link_60 並依序組裝形成四連桿 第二週心得 這周學到了使用程式碼來解決資料的方便，也開始學習使用Vrep。 第二週影片 Solvespace 30-50-60 cm 比例的四連桿組立 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo .","title":"2017/03/01 W2","tags":"Course","url":"./W2.html"},{"text":"20170222W1上課內容 一.可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱 二. 了解如何使用stunnel 在按下start之後，會出現錯誤的圖案 ， 這是因為stunnel資料夾裡的config/styunnel.conf裡的ip與電腦的ip不同可至cmd打ipconfig/all的指令，找到電腦的ip位置並將其複製、貼到styunnel.conf裡 自己IP 修改IP(accept後面的IP) 三.開啟Leo 利用Scite編輯Start.bat 四.利用python程式碼控制Vrep裡的單連桿作動。 可至 課程倉儲 的data裡下載fourbar_eightbar_solvespace_vrep.7z以及onelink_vrep_remoteapi_pos_vel.7z並解壓縮，裡面有單連桿、四連桿及八連桿三個檔案，可試著在solvespace及Vrep裡開啟。 在Vrep裡開啟one_link_robot_remoteAPI.ttt的檔案(ttt是Vrep檔案的副檔名)，在SciTE裡開啟one_link_robot_remoteAPI_joint_target_vel.py的檔案，按下Tool裡的Go即可開始控制單連桿，按Enter會旋轉，按P會暫停。 第一週心得 經過上學期的學習以後發現這學期學的課程變得有點難，每周還要有組別上台報告自己組的該周進度，希望這學期可以早點進入狀況。 第一週影片 stunnel設定 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo .","title":"2017/02/22 W1","tags":"Course","url":"./W1.html"},{"text":"group7 網誌 、 投影片 、 倉儲 40423202 網誌 、 投影片 、 倉儲 40423221 網誌 、 投影片 、 倉儲 40423222 網誌 、 投影片 、 倉儲 40423228 網誌 、 投影片 、 倉儲 40423245 網誌 、 投影片 、 倉儲 40423248 網誌 、 投影片 、 倉儲 40423251 網誌 、 投影片 、 倉儲","title":"bg7成員","tags":"Course","url":"./group.html"}]};