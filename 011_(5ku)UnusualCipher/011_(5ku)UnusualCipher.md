DESCRIPTION:

yet another easy kata!

Task:

Playfair cipher is a digram substitution cipher which unlike single letter substitution cipher encrypts pairs of letters. In this kata, you're going to implement the same.


Input

A string s and key key both consist of letters from the English alphabet and whitespace characters.

Implementation:

In this kata, the cipher is case insensitive.

Matrix formation

A 5 by 5 matrix of unique letters is to be constructed. The matrix should consist of letters from the string key + alphabet considering only the first occurrence of each letter. As the number of letters in the alphabet is 26, we would consider i and j to be the same.
using playfair jexample as key

    P  L A Y F
 (I/J) R E X M
    B  C D G H
    K  N O Q S
    T  U V W Z 
You have to construct 5X5 matrix with the letters of string and remaining alphabets written in this matrix (with only first occurence)

Remember: if J comes before I in the key, then it's J that goes into the matrix rather than I, in short whoever comes first goes into matrix but will be used as both i and j

Encryption

All examples used in this section use the above key matrix as ref.

You have to deal only with letters so discard other characters.
Insert x in between all pair of contiguous letters. (eg coddwars -> codxdwars or codddwars -> codxdxdwars) Note :Don't worry about inputs with consecutive xx, you'll never encounter them during the tests.
Add x to make string length even.
Break the given plaintext into pairs.
For each pair:
If both letters are in the same row, then they are replaced by the letters to the immediate right of each one; LY 
→
→ AF. (wrap around if required, e.g LF 
→
→ AP).
If both letters are in the same column, then they are replaced by the letter immediately beneath each one; eo 
→
→ dv. (wrap around if required)
If the digraph letters are neither in the same row nor the same column, the rule differs. 
To encipher the first letter, look along its row until you reach the column containing the second letter; the letter at this intersection replaces the first letter. 
To encipher the second letter, look along its row until you reach the column containing the first letter; the letter at the intersection replaces the second letter. 
⇒
⇒  RO 
→
→ EN.
Now you have to insert space characters in the ciphered string so that they are matching there original position in the input string.".
Output

Ciphered text generated from the above steps in upper case.
Example:

 s = cozy lummox gives smart squid who asks for job pen
 key = playfair jexample
 key matrix = described above
 

After step 1, 2, 3:  
  s = cozylumxmoxgivesxsmartsquidwhoasksforjobpenx

After step 4:  
  s = co zy lu mx mo xg iv es xs ma rt sq ui dw ho as ks fo ri ob pe nx qr
 
After step 5:  
  ciphertext pairs = dn wf rl im es gq et mo mq ef iu ks tr gv ds fo nk as er kd ai   
    
After step 6:    
  ciphered text = dnwf rlimes gqetm omqef iukst rgv dsfo nka ser kda iqr  
    
Hence, output: DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDA IQR
Enjoy!


________________________________________

ОПИСАНИЕ:

Еще одна легкая ката!

Задача:

Шифр Playfair - это шифр подстановки диграмм, который, в отличие от шифра подстановки одной буквы, шифрует пары букв. В этой ката вы собираетесь реализовать то же самое.

Вход

Строка s и ключевая клавиша состоят из букв английского алфавита и пробелов.

Реализация:

В этой ката шифр нечувствителен к регистру.

Формирование матрицы

Построится матрица уникальных букв 5 на 5. Матрица должна состоять из букв из строковой клавиши + алфавит, учитывая только первое вхождение каждой буквы. Поскольку количество букв в алфавите равно 26, мы считаем i и j одинаковыми.

Использование playfair jexample в качестве ключа

П Л А И Ф

(I/J) R E X M

До н. н. н. д. г.

К Н О К С

T U V W Z

Вы должны построить матрицу 5X5 с буквами строки и оставшимися алфавитами, написанными в этой матрице (только с первым вхождением)

Помните: если J приходит раньше I в ключе, то это J входит в матрицу, а не я, короче говоря, тот, кто придет первым, переходит в матрицу, но будет использоваться как i, так и j

Шифровка

Во всех примерах, используемых в этом разделе, используется приведенная выше ключевая матрица в качестве ссылки.

Вам приходится иметь дело только с буквами, поэтому отбрасывайте другие символы.

Вставьте x между всеми парами смежных букв. (например, coddwars -> codxdwars или codddwars -> codxdxdwars) Примечание: Не беспокойтесь о входах с последовательным xx, вы никогда не столкнетесь с ними во время тестов.

Добавьте x, чтобы сделать длину строки равномерной.

Разбейте данный открытый текст на пары.

Для каждой пары:

Если обе буквы находятся в одной строке, то они заменяются буквами справа от каждой из них; LY

→

→ AF. (обернутый, если требуется, например, LF

→

→ AP).

Если обе буквы находятся в одном столбце, то они заменяются буквой непосредственно под каждой из них; eo

→

→ dv. (обернутый, если требуется)

Если буквы диграфа не находятся ни в одной строке, ни в одном столбце, правило отличается.

Чтобы шифровать первую букву, смотрите вдоль ее строки, пока не дойдете до столбца, содержащего вторую букву; буква на этом пересечении заменяет первую букву.

Чтобы шифровать вторую букву, смотрите вдоль ее строки, пока не дойдете до столбца, содержащего первую букву; буква на перекрестке заменяет вторую букву.

⇒

⇒ RO

→

→ RU.

Теперь вам нужно вставить пробелы в зашифрованную строку, чтобы они соответствовали исходной позиции во входной строке".

Выпуск

Шифрированный текст, сгенерированный из вышеуказанных шагов в верхнем регистре.

Пример:

S = уютный lummox дает умному кальмару, который просит ручку для работы

Ключ = playfair jexample

Ключевая матрица = описано выше

После шага 1, 2, 3:

S = cozylumxmoxgivesxsmartsquidwhoasksforjobpenx

После шага 4:

S = co zy lu mx mo xg iv es xs ma rt sq ui dw ho as ks fo ri ob pe nx qr

После шага 5:

Пары шифротекста = dn wf rl im es gq et mo mq ef iu ks tr gv ds fo nk as er kd ai

После шага 6:

Зашифрованный текст = dnwf rlimes gqetm omqef iukst rgv dsfo nka ser kda iqr

Таким образом, выпуск: DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDA IQR

Наслаждайтесь!