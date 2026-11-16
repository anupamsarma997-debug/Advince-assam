import { Book } from '../types';

export const CODE_YATRA_BOOK: Book = {
  id: 'code-yatra-2026',
  title: 'কোড-যাত্ৰা মহাপুথি: শূণ্যৰ পৰা এক্সপাৰ্ট ছফ্টৱেৰ ডেভেলপাৰ',
  subtitle: 'The Complete Assamese Developer Masterclass — ২০২৬ সংস্কৰণ',
  author: 'লেখকৰ নাম যোগ কৰিব লাগিব',
  edition: '২০২৬ প্ৰিমিয়াম সংস্কৰণ',
  publishedYear: '২০২৬',
  language: 'অসমীয়া (Assamese)',
  isbn: '',
  copyright: '© ২০২৬ | প্ৰকাশৰ আগতে লেখক আৰু অধিকাৰ-সংক্রান্ত তথ্য নিশ্চিত কৰিব লাগিব।',
  description: 'কম্পিউটাৰ বিজ্ঞান, প্ৰগ্ৰামিং আৰু আধুনিক ছফ্টৱেৰ নিৰ্মাণৰ বিষয়সমূহ অসমীয়া ভাষাত সহজভাৱে শিকিবলৈ প্ৰস্তুত কৰা এখন বিকাশাধীন শিক্ষামূলক গ্ৰন্থ।',
  coverColor: '#0f172a',
  coverBadge: 'The Complete Assamese Developer Masterclass',
  coverStyle: 'royal',
  tags: ['Python', 'DSA', 'FastAPI', 'React 19', 'Docker', 'DevOps', 'Edge AI', 'System Design'],
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-08-26T00:00:00.000Z',
  volumes: [
    {
      id: 'vol-1',
      title: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      description: 'কম্পিউটাৰ আৰ্কিটেকচাৰ, বাইনাৰী চিষ্টেম, এলগৰিদম আৰু আই/অ’ চক্ৰ',
      chapterIds: ['ch-1', 'ch-2', 'ch-3'],
    },
    {
      id: 'vol-2',
      title: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      description: 'মেম’ৰি মডেল, মিউটেবিলিটি, পেটাৰ্ণ মেচিং, জেনেৰেটৰ আৰু ডেকৰেটৰ',
      chapterIds: ['ch-4', 'ch-5', 'ch-6', 'ch-7'],
    },
    {
      id: 'vol-3',
      title: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      description: 'লিনিয়াৰ আৰু নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ, গ্ৰাফ আৰু ছৰ্টিং এলগৰিদম',
      chapterIds: ['ch-8', 'ch-9', 'ch-10'],
    },
    {
      id: 'vol-4',
      title: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      description: 'OOP স্তম্ভ, SOLID নীতি, ডিজাইন পেটাৰ্ণ (Strategy & Factory)',
      chapterIds: ['ch-11', 'ch-12'],
    },
    {
      id: 'vol-5',
      title: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      description: 'AsyncIO, Non-blocking I/O, Logging আৰু কাষ্টম এক্সেপচন হেণ্ডলিং',
      chapterIds: ['ch-14', 'ch-16'],
    },
    {
      id: 'vol-6',
      title: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      description: 'SQL, SQLite, ACID ধৰ্ম, FastAPI ২০২৬ আৰু JWT Auth',
      chapterIds: ['ch-17', 'ch-19'],
    },
    {
      id: 'vol-7',
      title: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      description: 'Modern JavaScript (ES6+), React 19 Components, CORS & API Client',
      chapterIds: ['ch-20', 'ch-21'],
    },
    {
      id: 'vol-8',
      title: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      description: 'Git, GitHub Actions CI/CD, Pytest (TDD), Docker, Edge AI আৰু ৬ মহীয়া ৰোডমেপ',
      chapterIds: ['ch-22', 'ch-23', 'ch-24', 'ch-25', 'ch-appendix'],
    },
  ],
  chapters: [
    {
      id: 'ch-1',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ১: কম্পিউটাৰ আৰ্কিটেকচাৰ, মেম’ৰি আৰু বাইনাৰী চিষ্টেম',
      subtitle: 'Von Neumann Architecture, CPU, Registers, Memory আৰু Binary Arithmetic',
      estimatedReadTime: '20–30 min',
      topics: ['Von Neumann Architecture', 'CPU, ALU & CU', 'Registers & Cache', 'RAM & Storage', 'Bits, Bytes & Binary', 'Hexadecimal'],
      content: \`## এই অধ্যায়ৰ লক্ষ্য

এই অধ্যায় পঢ়াৰ পিছত আপুনি CPU, memory, binary আৰু hexadecimal-ৰ মৌলিক ধাৰণা বুজাব পাৰিব; decimal আৰু binary ৰূপান্তৰ কৰিব পাৰিব; আৰু Python-ত bitwise operator-ৰ ফল ব্যাখ্যা কৰিব পাৰিব।

## ১.১ কম্পিউটাৰ আৰ্কিটেকচাৰ কি?

কম্পিউটাৰ আৰ্কিটেকচাৰ (Computer Architecture) বুলিলে কম্পিউটাৰৰ processor, memory, input-output আৰু এই অংশসমূহে কেনেদৰে একেলগে কাম কৰে তাৰ মৌলিক নক্সা আৰু নিয়মসমূহক বুজায়।

### Von Neumann Architecture

১৯৪৫ চনৰ First Draft of a Report on the EDVAC নথিখনৰ সৈতে Von Neumann architecture-ৰ ঐতিহাসিক ধাৰণাটো জড়িত। ইয়াৰ এটা মূল বৈশিষ্ট্য হৈছে—প্ৰগ্ৰামৰ নিৰ্দেশনা আৰু ডেটা একে read-write memory-ত সংৰক্ষণ কৰা হয়। আধুনিক কম্পিউটাৰত ইয়াৰ বহু উন্নত ৰূপ আৰু পৰিৱৰ্তন ব্যৱহাৰ কৰা হয়।

সৰল ধাৰণাচিত্ৰ:

~~~text
        +----------------------+
        |      Input Unit      |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |         CPU          |
        | +------+  +--------+ |
        | |  ALU |  |   CU   | |
        | +------+  +--------+ |
        |     Registers        |
        +----------+-----------+
                   |
             Data / Address
                Buses
                   |
                   v
        +----------------------+
        |      Main Memory     |
        | Instructions + Data |
        +----------------------+
                   |
                   v
        +----------------------+
        |     Output Unit      |
        +----------------------+
~~~

এই চিত্ৰটো শিক্ষামূলক সৰলীকৰণ; সকলো আধুনিক কম্পিউটাৰৰ ভিতৰৰ সংযোগ একে নহয়।

### CPU — Central Processing Unit

CPU-এ প্ৰগ্ৰামৰ নিৰ্দেশনা execute কৰে আৰু কম্পিউটাৰৰ বিভিন্ন কাৰ্য সমন্বয় কৰে।

- **ALU (Arithmetic Logic Unit):** যোগ, বিয়োগ, তুলনা, AND, OR আদি গাণিতিক আৰু যুক্তিগত অপাৰেচন কৰে।
- **Control Unit (CU):** নিৰ্দেশনা আনিবলৈ, decode কৰিবলৈ আৰু প্ৰয়োজনীয় অংশলৈ নিয়ন্ত্ৰণ সংকেত পঠিয়াবলৈ সহায় কৰে।
- **Registers:** CPU-ৰ ভিতৰত থকা অতি দ্ৰুত আৰু সৰু storage location। ইয়াত বৰ্তমান কামত লাগি থকা ডেটা, ঠিকনা বা নিৰ্দেশনাৰ অংশ সাময়িকভাৱে ৰখা হয়।

**মনত ৰাখিব:** সকলো register-ৰ আকাৰ একে নহয়। ৩২-bit বা ৬৪-bit CPU-ত সাধাৰণ integer register-ৰ আকাৰ সেই শব্দ-আকাৰৰ সৈতে মিলিব পাৰে, কিন্তু বিশেষ-purpose register-ৰ আকাৰ বেলেগ হ’ব পাৰে।

### Fetch–Decode–Execute Cycle

1. **Fetch:** মেম’ৰিৰ পৰা পৰৱৰ্তী নিৰ্দেশনা আনে।
2. **Decode:** নিৰ্দেশনাটোৱে কি কাম কৰিব লাগিব সেয়া বুজে।
3. **Execute:** নিৰ্দেশনাৰ কাম সম্পন্ন কৰে।
4. **Write back:** প্ৰয়োজন হ’লে ফলাফল register বা memory-ত লিখে।

এইটো এটা শিক্ষামূলক মডেল; বাস্তৱ CPU-ত pipelining, caching আৰু out-of-order execution-ৰ দৰে অধিক জটিল কৌশল থাকিব পাৰে।

## ১.২ মেম’ৰি: Register, Cache, RAM আৰু Storage

কম্পিউটাৰত মেম’ৰি একেটা বস্তু নহয়। বিভিন্ন ধৰণৰ storage-ৰ গতি, ক্ষমতা আৰু ব্যৱহাৰ বেলেগ।

| ধৰণ | সাধাৰণ ব্যৱহাৰ | বৈশিষ্ট্য |
|---|---|---|
| Register | CPU-ৰ তাৎক্ষণিক কাম | অতি সৰু আৰু অতি দ্ৰুত |
| Cache | সঘনাই ব্যৱহৃত ডেটা | CPU-ৰ ওচৰত; RAM-তকৈ সাধাৰণতে দ্ৰুত |
| RAM | চলি থকা প্ৰগ্ৰাম আৰু ডেটা | Volatile; বিদ্যুৎ বন্ধ হ’লে সাধাৰণতে ডেটা নাথাকে |
| SSD / HDD | দীৰ্ঘম্যাদী ফাইল সংৰক্ষণ | Non-volatile storage |

### RAM — Random Access Memory

RAM হৈছে কম্পিউটাৰৰ প্ৰাথমিক working memory। চলি থকা app, প্ৰগ্ৰাম আৰু ডেটাৰ বহু অংশ ইয়াত ৰখা হয়।

- RAM সাধাৰণতে **volatile**: বিদ্যুৎ যোগান বন্ধ হ’লে ইয়াৰ ডেটা নষ্ট হয়।
- RAM-ৰ ঠিকনা ব্যৱহাৰ কৰি ডেটাৰ স্থান চিনাক্ত কৰা হয়।
- অধিক RAM থাকিলে একেলগে অধিক প্ৰগ্ৰাম চলাবলৈ সহায় হ’ব পাৰে; কিন্তু কম্পিউটাৰৰ গতি কেৱল RAM-ৰ পৰিমাণৰ ওপৰত নিৰ্ভৰ নকৰে।

### Secondary Storage

- **HDD (Hard Disk Drive):** ঘূৰি থকা magnetic platter-ত ডেটা সংৰক্ষণ কৰে। সাধাৰণতে কম খৰচত অধিক capacity পোৱা যায়, কিন্তু mechanical অংশ থকাৰ বাবে latency বেছি।
- **SSD (Solid State Drive):** flash memory ব্যৱহাৰ কৰে আৰু চলন্ত mechanical platter নাথাকে। বহু সাধাৰণ কামত HDD-তকৈ দ্ৰুত, কিন্তু সকলো SSD-ৰ গতি একে নহয়।
- **NVMe SSD:** PCIe-ৰ ওপৰত NVMe protocol ব্যৱহাৰ কৰা SSD। গতি model, PCIe generation, workload আৰু cooling-ৰ ওপৰত নিৰ্ভৰ কৰে। বিজ্ঞাপনৰ সৰ্বোচ্চ sequential speed-কে সকলো কামৰ বাস্তৱ গতি বুলি ধৰিব নালাগে।
- **Cloud Storage:** ইণ্টাৰনেটৰ জৰিয়তে দূৰৰ data centre-ত ফাইল সংৰক্ষণ কৰা সেৱা; উদাহৰণ AWS S3 আৰু Google Cloud Storage। ইয়াৰ বাবে network connection আৰু provider-ৰ নিয়ম প্ৰযোজ্য।

## ১.৩ Input, Output আৰু Bus

- **Input device:** Keyboard, mouse, microphone, camera আদি—কম্পিউটাৰলৈ ডেটা বা নিৰ্দেশনা দিয়ে।
- **Output device:** Monitor, speaker, printer আদি—কম্পিউটাৰৰ ফলাফল দেখুৱায় বা প্ৰদান কৰে।
- **Data Bus:** অংশসমূহৰ মাজত ডেটা স্থানান্তৰ কৰে।
- **Address Bus:** কোন memory location বা device-ৰ সৈতে যোগাযোগ কৰা হ’ব সেয়া নিৰ্দেশ কৰে।
- **Control signals:** পঢ়া, লিখা আৰু অন্যান্য কাৰ্যৰ সময় সমন্বয় কৰে।

বাস্তৱ আধুনিক system-ত bus আৰু interconnect-ৰ গঠন অধিক জটিল; ওপৰৰ বৰ্ণনা মৌলিক ধাৰণাৰ বাবে।

## ১.৪ Bit, Nibble আৰু Byte

কম্পিউটাৰৰ ডিজিটেল ডেটা binary digit-ৰ সহায়ত প্ৰকাশ কৰা হয়।

- **Bit:** Binary digit; ইয়াৰ মান ০ বা ১।
- **Nibble:** ৪ bit।
- **Byte:** ৮ bit। এটা byte-এ 2⁸ = 256 টা পৃথক bit-pattern প্ৰকাশ কৰিব পাৰে।

### Storage unit: দুটা convention মনত ৰাখিব

দৈনন্দিন computing-ত দুটা একক-পদ্ধতি দেখা যায়:

| একক | Decimal (SI) | Binary (IEC) |
|---|---:|---:|
| kilo / Ki | 1,000 bytes (kB) | 1,024 bytes (KiB) |
| mega / Mi | 1,000,000 bytes (MB) | 1,048,576 bytes (MiB) |
| giga / Gi | 1,000,000,000 bytes (GB) | 1,073,741,824 bytes (GiB) |
| tera / Ti | 1,000,000,000,000 bytes (TB) | 1,099,511,627,776 bytes (TiB) |

**গুৰুত্বপূৰ্ণ:** 1 KB = 1024 bytes বুলি বহু পুৰণি পাঠ্যত লিখা হয়। সঠিক binary একক হৈছে 1 KiB = 1024 bytes; SI অনুসৰি 1 kB = 1000 bytes। এই কিতাপত দুয়োটা পৃথককৈ ব্যৱহাৰ কৰা হ’ব।

## ১.৫ Binary Number System

Decimal system-ত ১০টা digit (০–৯) ব্যৱহাৰ হয়। Binary system-ত মাত্ৰ দুটা digit—০ আৰু ১—ব্যৱহাৰ হয়। প্ৰতিটো স্থানৰ মান ২-ৰ ঘাত অনুসৰি বৃদ্ধি পায়।

উদাহৰণ: Binary 1101₂ ক Decimal-লৈ ৰূপান্তৰ:

1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = 8 + 4 + 0 + 1 = 13

সেয়ে 1101₂ = 13₁₀।

### Decimal 13 ক Binary-লৈ ৰূপান্তৰ

২-ৰে ভাগ কৰি remainder লিখোঁ:

| ভাগ | ভাগফল | অৱশিষ্ট |
|---|---:|---:|
| 13 ÷ 2 | 6 | 1 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

অৱশিষ্ট তলৰ পৰা ওপৰলৈ পঢ়িলে 1101₂। সেয়ে 13₁₀ = 1101₂।

আন এটা উদাহৰণ: 10110₂

1 × 2⁴ + 0 × 2³ + 1 × 2² + 1 × 2¹ + 0 × 2⁰ = 16 + 0 + 4 + 2 + 0 = 22

সেয়ে 10110₂ = 22₁₀।

## ১.৬ Python-ত Bitwise Operations

Python-ত integer-ৰ ওপৰত bitwise operator ব্যৱহাৰ কৰিব পাৰি।

~~~python
a = 5       # binary 0101
b = 3       # binary 0011

print(a & b)   # AND: 1
print(a | b)   # OR: 7
print(a ^ b)   # XOR: 6
print(a << 1)  # Left shift: 10
print(a >> 1)  # Right shift: 2
print(~a)      # -6
~~~

| Operator | অৰ্থ | 0101 আৰু 0011-ৰ ফল |
|---|---|---|
| & | AND: দুয়োটা bit 1 হ’লেহে 1 | 0001 |
| \`|\` | OR: যিকোনো এটা bit 1 হ’লে 1 | 0111 |
| ^ | XOR: bit দুটা বেলেগ হ’লে 1 | 0110 |
| << | বাওঁফালে shift | 0101 << 1 = 1010 |
| >> | সোঁফালে shift | 0101 >> 1 = 0010 |

**Python-ৰ NOT (~) সম্পৰ্কে সাৱধানতা:** Python integer fixed 8-bit বা 32-bit unsigned value নহয়। Python-ত ~x-ৰ ফল -(x + 1); সেয়ে ~5-ৰ ফল -6। ইয়াক কেৱল ৪টা bit উলটাই 1010 পোৱা বুলি ব্যাখ্যা কৰিলে ভুল হ’ব।

Hexadecimal-ত ১৬টা digit ব্যৱহাৰ হয়: 0–9 আৰু A–F। ৪টা binary bit-এ এটা hexadecimal digit প্ৰকাশ কৰে।

~~~python
value = 0xFF
print(value)       # 255
print(bin(value))  # 0b11111111
print(hex(255))    # 0xff
~~~

## ১.৭ নিজে চেষ্টা কৰক

1. Bit আৰু Byte-ৰ মাজত পাৰ্থক্য কি?
2. ৪ bit-এ কিমানটা পৃথক pattern প্ৰকাশ কৰিব পাৰে?
3. 1011₂ ক Decimal-লৈ ৰূপান্তৰ কৰক।
4. Decimal 18 ক Binary-লৈ ৰূপান্তৰ কৰক।
5. 1 kB আৰু 1 KiB-ৰ পাৰ্থক্য লিখক।
6. RAM কিয় volatile memory বুলি কোৱা হয়?
7. Register আৰু RAM-ৰ মাজত দুটা পাৰ্থক্য লিখক।
8. a = 6, b = 3 হ’লে a & b, a | b আৰু a ^ b-ৰ ফল কি?
9. Python-ত ~5 কিয় -6 হয়?
10. SSD আৰু HDD-ৰ মাজত মূল পাৰ্থক্য কি?

### উত্তৰসূচী

1. Bit হৈছে ০ বা ১; Byte হৈছে ৮ bit।
2. 2⁴ = 16 টা pattern।
3. 1011₂ = 8 + 0 + 2 + 1 = 11₁₀।
4. 18₁₀ = 10010₂।
5. 1 kB = 1000 bytes; 1 KiB = 1024 bytes।
6. বিদ্যুৎ যোগান বন্ধ হ’লে RAM-ৰ data সাধাৰণতে নাথাকে।
7. Register CPU-ৰ ভিতৰত অতি সৰু আৰু অতি দ্ৰুত; RAM অধিক capacity-ৰ working memory।
8. AND = 2, OR = 7, XOR = 5।
9. Python-ত ~x = -(x+1); সেয়ে ~5 = -6।
10. HDD magnetic platter ব্যৱহাৰ কৰে; SSD flash memory ব্যৱহাৰ কৰে।

## ১.৮ অধিক পঢ়াৰ বাবে নিৰ্ভৰযোগ্য উৎস

- John von Neumann, First Draft of a Report on the EDVAC (1945): https://www.wiley.com/en-us/First+Draft+of+a+Report+on+the+EDVAC-p-9780471648891
- Python official documentation — Bitwise Operations: https://docs.python.org/3/library/stdtypes.html#bitwise-operations-on-integer-types
- NIST — SI prefixes: https://www.nist.gov/pml/owm/metric-si-prefixes
- IEC — Prefixes for binary multiples (KiB, MiB, GiB): https://www.iec.ch/si-prefixes

**অধ্যায়ৰ সাৰাংশ:** কম্পিউটাৰে binary data-ৰ ওপৰত কাম কৰে। CPU-এ নিৰ্দেশনা execute কৰে; register আৰু cache-এ তাৎক্ষণিক কামত সহায় কৰে; RAM-এ চলি থকা program-ৰ data ৰাখে; আৰু SSD/HDD-এ দীৰ্ঘম্যাদী storage দিয়ে। Binary আৰু hexadecimal বুজিলে কম্পিউটাৰৰ ভিতৰৰ data representation বুজিবলৈ সহজ হয়।
\`,
    },
    {
      id: 'ch-2',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ২: এলগৰিদমিক চিন্তা আৰু সমস্যা সমাধানৰ বিজ্ঞান',
      subtitle: 'Algorithm Design, Pseudocode, Flowcharts, Testing আৰু Complexity',
      estimatedReadTime: '25–35 min',
      topics: ['Algorithm Fundamentals', 'Problem Decomposition', 'Pseudocode', 'Flowcharts', 'Python Implementation', 'Testing & Complexity'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- এলগৰিদম কি আৰু এটা ভাল এলগৰিদমৰ বৈশিষ্ট্য বুজাব পাৰিব।
- এটা ডাঙৰ সমস্যাক সৰু সৰু ধাপত ভাগ কৰিব পাৰিব।
- Pseudocode আৰু Flowchart ব্যৱহাৰ কৰি সমাধান পৰিকল্পনা কৰিব পাৰিব।
- সেই পৰিকল্পনাক Python কোডলৈ ৰূপান্তৰ কৰিব পাৰিব।
- সাধাৰণ test case আৰু edge case চিনাক্ত কৰিব পাৰিব।
- সময় আৰু অতিৰিক্ত মেম’ৰিৰ জটিলতাৰ প্ৰাথমিক ধাৰণা পাব।

## ২.১ এলগৰিদম (Algorithm) কি?

**এলগৰিদম** হৈছে কোনো সমস্যা সমাধান কৰিবলৈ অনুসৰণ কৰা স্পষ্ট, ক্ৰমবদ্ধ আৰু সীমিত সংখ্যক নিৰ্দেশনাৰ সমষ্টি। কম্পিউটাৰ প্ৰগ্ৰাম লিখাৰ আগতে এলগৰিদম সাজিলে সমস্যাটো কেনেকৈ সমাধান হ'ব সেয়া আগতেই পৰীক্ষা কৰিব পাৰি।

উদাহৰণ: দুটা সংখ্যাৰ যোগফল উলিওৱা।

1. প্ৰথম সংখ্যা A গ্ৰহণ কৰা।
2. দ্বিতীয় সংখ্যা B গ্ৰহণ কৰা।
3. A আৰু B যোগ কৰা।
4. যোগফল দেখুওৱা।
5. কাম শেষ কৰা।

এইটো এটা সৰল এলগৰিদম। ইয়াত নিৰ্দেশনাবোৰৰ ক্ৰম স্পষ্ট আৰু কামটো সীমিত ধাপত শেষ হয়।

### এটা ভাল এলগৰিদমৰ মুখ্য বৈশিষ্ট্য

- **Input (ইনপুট):** শূন্য বা ততোধিক ইনপুট থাকিব পাৰে। ইনপুটৰ ধৰণ আৰু সীমা স্পষ্ট হ'ব লাগে।
- **Output (আউটপুট):** কমেও এটা ফলাফল উৎপন্ন কৰিব লাগে।
- **Definiteness (নিৰ্দিষ্টতা):** প্ৰতিটো ধাপৰ অৰ্থ দ্ব্যৰ্থহীন হ'ব লাগে।
- **Finiteness (সসীমতা):** নিৰ্দিষ্ট সংখ্যক ধাপৰ পিছত এলগৰিদম শেষ হ'ব লাগে।
- **Effectiveness (কাৰ্যকৰীতা):** প্ৰতিটো ধাপ বাস্তৱত সম্পাদন কৰিব পৰা সৰল কাৰ্য হ'ব লাগে।
- **Correctness (শুদ্ধতা):** নিৰ্দিষ্ট অনুমান আৰু বৈধ ইনপুটৰ বাবে সঠিক ফল দিব লাগে।

মনত ৰাখিব: কেৱল কোড চলিলেই সমাধান শুদ্ধ নহয়। ভুল ফল দিয়া প্ৰগ্ৰামো চলিব পাৰে।

## ২.২ সমস্যা সমাধানৰ পৰিকল্পনা

প্ৰগ্ৰাম লিখাৰ আগতে তলৰ ক্ৰমটো অনুসৰণ কৰক।

1. **সমস্যাটো বুজক:** প্ৰশ্নটোৱে সঠিকভাৱে কি বিচাৰিছে?
2. **Input আৰু Output লিখক:** কি তথ্য পোৱা যাব আৰু কি ফল দিব লাগিব?
3. **সীমা আৰু অনুমান নিৰ্ধাৰণ কৰক:** ইনপুট খালী হ'ব পাৰেনে? ঋণাত্মক সংখ্যা থাকিব পাৰেনে? ডেটাৰ আকাৰ কিমান?
4. **উদাহৰণ সাজক:** এটা সাধাৰণ উদাহৰণ আৰু কেইটামান ব্যতিক্ৰমী উদাহৰণ হাতেৰে সমাধান কৰক।
5. **ধাপ বা Pseudocode লিখক:** প্ৰগ্ৰামিং ভাষাৰ syntax-ত নোসোমাই যুক্তিটো লিখক।
6. **Flowchart আঁকক:** সিদ্ধান্ত আৰু কাৰ্যৰ ক্ৰম দৃশ্যমান কৰক।
7. **কোড লিখক আৰু পৰীক্ষা কৰক:** সাধাৰণ, সীমান্তৱৰ্তী আৰু ভুল ইনপুটৰ test case চলাওক।

### সমস্যা ভাঙি সৰু কৰা (Decomposition)

ধৰক, এখন নম্বৰ তালিকাৰ ভিতৰত আটাইতকৈ ডাঙৰ সংখ্যাটো বিচাৰিব লাগে। সমস্যাটো সৰু ধাপত ভাগ কৰিব পাৰি:

- তালিকাখন খালী নে নহয় পৰীক্ষা কৰা।
- প্ৰথম সংখ্যাটোক বৰ্তমানৰ সৰ্বাধিক মান বুলি ধৰা।
- বাকী সংখ্যাবোৰ এটাৰ পিছত এটা পৰীক্ষা কৰা।
- বৰ্তমানৰ সৰ্বাধিক মানতকৈ ডাঙৰ সংখ্যা পালে মানটো সলনি কৰা।
- শেষত সৰ্বাধিক মানটো দেখুওৱা।

## ২.৩ Pseudocode (ছ্যুড'কোড)

**Pseudocode** হৈছে কোনো প্ৰগ্ৰামৰ যুক্তি সাধাৰণ ভাষা আৰু প্ৰগ্ৰামিং-সদৃশ নিৰ্দেশনাৰে লিখাৰ পদ্ধতি। ইয়াৰ কোনো এটা বাধ্যতামূলক programming-language syntax নাই। ইয়াৰ উদ্দেশ্য হৈছে কোড লিখাৰ আগতে যুক্তিটো স্পষ্ট কৰা।

সৰ্বাধিক সংখ্যা বিচৰাৰ Pseudocode:

```text
ALGORITHM FindMaximum(numbers)
    IF numbers is empty
        RETURN "No value"
    END IF

    maximum = first item in numbers

    FOR each remaining item
        IF item > maximum
            maximum = item
        END IF
    END FOR

    RETURN maximum
END ALGORITHM
```

Pseudocode-ত `IF`, `FOR`, `RETURN` আদি শব্দ ব্যৱহাৰ কৰা হৈছে। এইবোৰ যুক্তি বুজাবলৈ ব্যৱহৃত; Python-ৰ সম্পূৰ্ণ syntax নহয়।

## ২.৪ Flowchart (ফ্ল'চাৰ্ট)

**Flowchart** হৈছে এলগৰিদমৰ ধাপসমূহক বিভিন্ন আকৃতি আৰু কাঁড়-চিহ্নৰে দেখুওৱা চিত্ৰ।

### সাধাৰণ Flowchart চিহ্ন

| চিহ্নৰ আকৃতি | নাম | ব্যৱহাৰ |
|---|---|---|
| Oval / উপবৃত্ত | Start / End | আৰম্ভণি বা সমাপ্তি |
| Rectangle / আয়ত | Process | গণনা বা কোনো কাৰ্য |
| Parallelogram / সামান্তৰিক | Input / Output | তথ্য গ্ৰহণ বা ফল দেখুওৱা |
| Diamond / হীৰক | Decision | চৰ্ত পৰীক্ষা; সাধাৰণতে Yes/No শাখা |
| Arrow / কাঁড় | Flow line | পৰৱৰ্তী ধাপৰ দিশ দেখুৱায় |

### সৰ্বাধিক সংখ্যা বিচৰাৰ Flowchart-ৰ ধাৰণা

```text
       (আৰম্ভ)
           |
    / সংখ্যা গ্ৰহণ /
           |
     < তালিকা খালী নে? >
        /       \\
      হয়        নহয়
      |            |
 / "মান নাই" /  [max = প্ৰথম সংখ্যা]
      |            |
    (শেষ)     [পৰৱৰ্তী সংখ্যা লোৱা]
                   |
             < সংখ্যা আছে নে? >
                /       \\
              নাই       আছে
              |           |
        / max দেখুওৱা /  < সংখ্যা > max? >
              |             /       \\
            (শেষ)          হয়       নহয়
                            |          |
                       [max = সংখ্যা]  |
                            \\________/
                                 |
                          পৰৱৰ্তী সংখ্যা
```

এই চিত্ৰটো যুক্তিৰ পাঠ্য-ৰূপ। কাগজত আঁকিলে Start/End-ৰ বাবে Oval, Process-ৰ বাবে Rectangle, Input/Output-ৰ বাবে Parallelogram আৰু Decision-ৰ বাবে Diamond ব্যৱহাৰ কৰিব।

## ২.৫ Python-ত এলগৰিদম ৰূপায়ণ

এতিয়া একেটা যুক্তি Python-ত লিখোঁ।

```python
def find_maximum(numbers: list[int]) -> int | None:
    """তালিকাৰ সৰ্বাধিক সংখ্যা ঘূৰাই দিয়ে।
    খালী তালিকা পালে None ঘূৰাই দিয়ে।
    """
    if len(numbers) == 0:
        return None

    maximum = numbers[0]

    for index in range(1, len(numbers)):
        if numbers[index] > maximum:
            maximum = numbers[index]

    return maximum


print(find_maximum([3, 7, 2, 9, 1]))  # 9
print(find_maximum([-5, -2, -10]))    # -2
print(find_maximum([4]))              # 4
print(find_maximum([]))               # None
```

**কোডৰ ব্যাখ্যা:**

- `len(numbers) == 0`-এ তালিকাখন খালী নে পৰীক্ষা কৰে।
- `maximum = numbers[0]`-এ প্ৰথম উপাদানটোক প্ৰাৰম্ভিক সৰ্বাধিক মান হিচাপে লয়।
- `range(1, len(numbers))`-এ দ্বিতীয় উপাদানৰ পৰা শেষলৈকে সূচক দিয়ে।
- `numbers[index] > maximum` সত্য হ'লে সৰ্বাধিক মান আপডেট হয়।
- শেষত `return maximum`-এ ফলাফল ঘূৰাই দিয়ে।

এই উদাহৰণটো Python 3.10 বা তাৰ পিছৰ সংস্কৰণৰ type-hint syntax ব্যৱহাৰ কৰে, কাৰণ ইয়াত `int | None` লিখা হৈছে। Type hint-এ মানৰ ধৰণ বুজায়; ই নিজে runtime-ত ইনপুটৰ ধৰণ বাধ্যতামূলকভাৱে পৰীক্ষা নকৰে।

## ২.৬ Test Case আৰু Edge Case

এটা এলগৰিদম শুদ্ধ নে নহয় বুজিবলৈ বিভিন্ন ধৰণৰ ইনপুটেৰে পৰীক্ষা কৰিব লাগে।

| পৰীক্ষাৰ ধৰণ | ইনপুট | আশা কৰা ফল |
|---|---|---|
| সাধাৰণ তালিকা | `[3, 7, 2, 9, 1]` | `9` |
| ঋণাত্মক সংখ্যা | `[-5, -2, -10]` | `-2` |
| এটা উপাদান | `[4]` | `4` |
| সকলো একে | `[6, 6, 6]` | `6` |
| খালী তালিকা | `[]` | `None` |
| সৰ্বাধিক মান আৰম্ভণিতে | `[10, 3, 2]` | `10` |
| সৰ্বাধিক মান শেষত | `[1, 2, 10]` | `10` |

**Edge case** মানে এনে বিশেষ বা সীমান্তৱৰ্তী ইনপুট, যিয়ে সাধাৰণ পৰিস্থিতিত লুকাই থকা ভুল উলিয়াই আনিব পাৰে। উদাহৰণস্বৰূপে, খালী তালিকা আৰু এটা উপাদান থকা তালিকা।

## ২.৭ Time Complexity আৰু Space Complexity-ৰ প্ৰাথমিক ধাৰণা

এলগৰিদমৰ দক্ষতা আলোচনা কৰিবলৈ সাধাৰণতে দুটা কথা চোৱা হয়:

- **Time Complexity:** ইনপুটৰ আকাৰ বাঢ়িলে কামৰ ধাপ বা operation-ৰ সংখ্যা কেনেদৰে বাঢ়ে।
- **Space Complexity:** এলগৰিদম চলোঁতে প্ৰয়োজন হোৱা অতিৰিক্ত মেম’ৰি কেনেদৰে বাঢ়ে।

সৰ্বাধিক সংখ্যা বিচৰা উদাহৰণত তালিকাৰ প্ৰতিটো উপাদান সৰ্বাধিক এবাৰ পৰীক্ষা কৰা হয়। তালিকাত `n` টা উপাদান থাকিলে কামৰ পৰিমাণ `n`-ৰ সৈতে সমানুপাতিকভাৱে বাঢ়ে। সেয়ে ইয়াৰ Time Complexity হৈছে **O(n)**।

ইয়াত কেৱল কেইটামান স্থায়ী variable ব্যৱহাৰ কৰা হৈছে; নতুন তালিকা তৈয়াৰ কৰা হোৱা নাই। সেয়ে অতিৰিক্ত Space Complexity হৈছে **O(1)**।

| তালিকাৰ উপাদান | তুলনাৰ সংখ্যা (সৰ্বাধিক) |
|---:|---:|
| 1 | 0 |
| 3 | 2 |
| 5 | 4 |
| 10 | 9 |
| n | n − 1 |

**Big-O** হৈছে ইনপুটৰ আকাৰ ডাঙৰ হ'লে algorithm-ৰ বৃদ্ধিৰ হাৰ বৰ্ণনা কৰাৰ এটা পদ্ধতি। এই অধ্যায়ত O(n) আৰু O(1)-ৰ প্ৰাথমিক অৰ্থহে শিকোৱা হৈছে; পিছৰ অধ্যায়ত ইয়াক অধিক গভীৰভাৱে আলোচনা কৰিব পাৰি।

## ২.৮ সাধাৰণ ভুল আৰু সাৱধানতা

- তালিকা খালী হ'লে `numbers[0]` ব্যৱহাৰ কৰিলে `IndexError` হ'ব পাৰে। সেয়ে আগতে খালী নে পৰীক্ষা কৰিব লাগে।
- সৰ্বাধিক মান সদায় `0` বুলি ধৰি ল'ব নালাগে; সকলো সংখ্যা ঋণাত্মক হ'ব পাৰে।
- কেৱল এটা উদাহৰণেৰে প্ৰগ্ৰাম পৰীক্ষা নকৰিব।
- Pseudocode-ৰ ধাপ আৰু Python কোডৰ যুক্তি একে নে নহয় মিলাই চাব।
- Flowchart-ত Decision-ৰ পৰা ওলোৱা শাখাবোৰৰ অৰ্থ (যেনে হয়/নহয়) স্পষ্টকৈ লিখিব।

## ২.৯ অনুশীলনী

1. এলগৰিদমৰ সংজ্ঞা নিজৰ ভাষাত লিখক।
2. এটা ভাল এলগৰিদমৰ যিকোনো চাৰিটা বৈশিষ্ট্য লিখক।
3. Pseudocode আৰু Python code-ৰ মাজত দুটা পাৰ্থক্য লিখক।
4. Flowchart-ত Diamond চিহ্ন কিহৰ বাবে ব্যৱহাৰ কৰা হয়?
5. দুটা সংখ্যাৰ ভিতৰত সৰু সংখ্যাটো বিচৰাৰ Pseudocode লিখক।
6. `[8, 2, 11, 5]` তালিকাখনৰ সৰ্বাধিক সংখ্যা বিচাৰোঁতে কিমানটা তুলনা লাগে?
7. `[0, -3, -8]` ইনপুটৰ বাবে সৰ্বাধিক সংখ্যা কিমান?
8. সৰ্বাধিক সংখ্যা বিচৰা এলগৰিদমটোৰ Time Complexity কিয় O(n)?
9. খালী তালিকাৰ বাবে এটা test case কিয় প্ৰয়োজন?
10. এটা তালিকাৰ গড় (average) উলিওৱাৰ বাবে Input, Process আৰু Output চিনাক্ত কৰক।

### অনুশীলনীৰ উত্তৰ

1. সমস্যা সমাধানৰ বাবে স্পষ্ট আৰু ক্ৰমবদ্ধ সীমিত নিৰ্দেশনাৰ সমষ্টি।
2. Input, Output, Definiteness, Finiteness, Effectiveness, Correctness-ৰ যিকোনো চাৰিটা।
3. Pseudocode ভাষা-নিৰপেক্ষ যুক্তিৰ বৰ্ণনা; Python code-ত Python-ৰ নিয়ম মানি চলিব লাগে।
4. চৰ্ত বা সিদ্ধান্ত পৰীক্ষা কৰিবলৈ।
5. `A` আৰু `B` গ্ৰহণ কৰা; যদি `A < B` তেন্তে `A` ঘূৰাই দিয়া, অন্যথা `B` ঘূৰাই দিয়া।
6. 3টা তুলনা।
7. 0।
8. n টা উপাদানৰ প্ৰতিটো পৰীক্ষা কৰা হয়; সেয়ে কামৰ বৃদ্ধি n-ৰ সমানুপাতিক।
9. খালী তালিকাত প্ৰথম উপাদান নাথাকে; ভুল সূচক ব্যৱহাৰ ৰোধ কৰিবলৈ এই অৱস্থা পৰীক্ষা কৰা লাগে।
10. Input: সংখ্যাৰ তালিকা; Process: যোগফল ÷ উপাদানৰ সংখ্যা; Output: গড়। খালী তালিকাৰ ক্ষেত্ৰত ফলাফল কেনেকৈ দেখুৱাব সেয়াও নিৰ্ধাৰণ কৰিব লাগে।

## ২.১০ অধিক পঢ়াৰ উৎস

- Donald E. Knuth, *The Art of Computer Programming, Volume 1: Fundamental Algorithms* — algorithm-ৰ মৌলিক ধাৰণা।
- Python Official Tutorial — https://docs.python.org/3/tutorial/ — Python syntax আৰু control flow।
- Python Built-in Functions — https://docs.python.org/3/library/functions.html — `len()`, `range()`, `max()` আদি।
- OpenDSA — https://opendsa-server.cs.vt.edu/ — data structures আৰু algorithm-ৰ শিক্ষামূলক পাঠ।

## অধ্যায়ৰ সাৰাংশ

এলগৰিদমে সমস্যা সমাধানৰ যুক্তি ধাপে ধাপে প্ৰকাশ কৰে। Pseudocode-এ ভাষা-নিৰপেক্ষভাৱে যুক্তি লিখিবলৈ সহায় কৰে আৰু Flowchart-এ সেই ধাপসমূহ চিত্ৰৰূপে দেখুৱায়। Python-ত ৰূপায়ণ কৰাৰ পিছত সাধাৰণ test case আৰু edge case চলাই শুদ্ধতা পৰীক্ষা কৰিব লাগে। Time Complexity-এ কামৰ বৃদ্ধিৰ হাৰ আৰু Space Complexity-এ অতিৰিক্ত মেম’ৰিৰ প্ৰয়োজন বুজায়।`,
    },
    {
      id: 'ch-3',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ৩: ইনপুট-আউটপুট চাইকেল, বাফাৰ আৰু ষ্ট্ৰীম',
      subtitle: 'Python Standard Streams, File Handling, Buffering আৰু Error Handling',
      estimatedReadTime: '25–35 min',
      topics: ['Input-Process-Output Cycle', 'stdin stdout stderr', 'Python Input Parsing', 'File Streams', 'Buffering and Flush', 'Safe File Handling'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- Input, Processing আৰু Output-ৰ সম্পৰ্ক বুজাব পাৰিব।
- Python-ৰ `stdin`, `stdout` আৰু `stderr` চিনাক্ত কৰিব পাৰিব।
- `input()`, `print()` আৰু `sys.stdin.readline()` ব্যৱহাৰ কৰিব পাৰিব।
- ফাইলক stream হিচাপে পঢ়া আৰু লিখাৰ পদ্ধতি বুজিব পাৰিব।
- Buffer আৰু `flush()`-ৰ কামৰ পাৰ্থক্য বুজাব পাৰিব।
- ফাইল খোলাৰ সময়ত encoding আৰু error handling কিয় প্ৰয়োজন বুজিব পাৰিব।

## ৩.১ Input–Process–Output (IPO) Cycle

কম্পিউটাৰে সাধাৰণতে তিনিটা মৌলিক কাম কৰে:

1. **Input (ইনপুট):** ব্যৱহাৰকাৰী, ফাইল, sensor বা আন এটা program-ৰ পৰা তথ্য গ্ৰহণ কৰা।
2. **Processing (প্ৰচেছিং):** CPU-এ নিৰ্দেশনা অনুসৰি তথ্যৰ ওপৰত কাম কৰা।
3. **Output (আউটপুট):** ফলাফল screen, file, printer বা আন system-লৈ পঠিওৱা।

উদাহৰণ: দুটা সংখ্যাৰ যোগফল উলিওৱা।

- Input: 12 আৰু 8
- Processing: 12 + 8
- Output: 20

```python
প্ৰথম_সংখ্যা = int(input("প্ৰথম সংখ্যা লিখক: "))
দ্বিতীয়_সংখ্যা = int(input("দ্বিতীয় সংখ্যা লিখক: "))

যোগফল = প্ৰথম_সংখ্যা + দ্বিতীয়_সংখ্যা

print("যোগফল:", যোগফল)
```

ইয়াত `input()`-এ text (string) ঘূৰাই দিয়ে। সেয়ে পূৰ্ণসংখ্যাৰ গণনাৰ বাবে `int()`-ৰে ৰূপান্তৰ কৰা হৈছে। ব্যৱহাৰকাৰীয়ে সংখ্যা নিলিখিলে `ValueError` হ'ব পাৰে; বাস্তৱ program-ত ভুল ইনপুটৰ ব্যৱস্থাও কৰিব লাগে।

## ৩.২ Python-ৰ Standard Streams

Python-এ সাধাৰণতে তিনিটা standard stream প্ৰদান কৰে। এইবোৰ `sys` module-ৰ জৰিয়তে পোৱা যায়।

| Stream | কাম | সাধাৰণ ব্যৱহাৰ |
|---|---|---|
| `sys.stdin` | Input পঢ়া | Keyboard বা redirected input |
| `sys.stdout` | সাধাৰণ output লিখা | Screen-ত ফলাফল দেখুওৱা |
| `sys.stderr` | Error/diagnostic message লিখা | ত্ৰুটিৰ বাৰ্তা দেখুওৱা |

```python
import sys

নাম = sys.stdin.readline().strip()

sys.stdout.write(f"নমস্কাৰ, {নাম}!\\n")
sys.stderr.write("এইটো এটা উদাহৰণমূলক diagnostic message.\\n")
```

**মন কৰিব:** `stdin` সদায় keyboard-ৰ পৰা আহিবই লাগিব বুলি নহয়। File redirection বা আন program-ৰ output-ও input হিচাপে আহিব পাৰে। একেদৰে `stdout` screen-ৰ সলনি file বা আন program-লৈ redirect কৰিব পাৰি।

## ৩.৩ Python-ত Input পঢ়াৰ পদ্ধতি

### পদ্ধতি ১: input()

`input()`-এ এটা line পঢ়ে আৰু শেষৰ newline আঁতৰাই string ঘূৰাই দিয়ে।

```python
নাম = input("আপোনাৰ নাম লিখক: ")
বয়স = int(input("আপোনাৰ বয়স লিখক: "))

print(f"নমস্কাৰ {নাম}! আপোনাৰ বয়স {বয়স} বছৰ।")
```

### পদ্ধতি ২: এটা line-ৰ পৰা একাধিক সংখ্যা

```python
# ইনপুট উদাহৰণ: 10 20 30
সংখ্যাসমূহ = list(map(int, input().split()))

print("সংখ্যাৰ যোগফল:", sum(সংখ্যাসমূহ))
```

- `split()`-এ whitespace অনুসৰি line-টো ভাগ কৰে।
- `map(int, ...)`-এ প্ৰতিটো অংশক integer-লৈ ৰূপান্তৰ কৰে।
- `list()`-এ ফলাফলক list-ত ৰাখে।

যদি input-ত সংখ্যা নাথাকে বা ভুল format থাকে, `ValueError` হ'ব পাৰে।

### পদ্ধতি ৩: sys.stdin.readline()

বহু line বা প্ৰতিযোগিতামূলক প্ৰগ্ৰামিংৰ input পঢ়োঁতে `sys.stdin.readline()` ব্যৱহাৰ কৰিব পাৰি।

```python
import sys

প্ৰথম_লাইন = sys.stdin.readline().strip()
দ্বিতীয়_লাইন = sys.stdin.readline().strip()

print("প্ৰথম:", প্ৰথম_লাইন)
print("দ্বিতীয়:", দ্বিতীয়_লাইন)
```

এই উদাহৰণত দুটা line পঢ়া হৈছে। `readline()`-এ সাধাৰণতে line-ৰ শেষত থকা newline-সহ string ঘূৰাই দিয়ে; `strip()`-এ দুয়োফালৰ whitespace আঁতৰায়। যদি কেৱল newline আঁতৰাব লাগে, `rstrip("\\n")` ব্যৱহাৰ কৰিব পাৰি।

**গুৰুত্বপূৰ্ণ:** একেটা input stream-ৰ পৰা `input()` আৰু `sys.stdin.readline()` মিহলাই ব্যৱহাৰ কৰিলে কোনটো function-এ কোন line পঢ়িলে সেয়া সহজে বিভ্ৰান্তিকৰ হ'ব পাৰে। এটা program-ত সাধাৰণতে এটা পদ্ধতি অনুসৰণ কৰক।

## ৩.৪ Output লিখা আৰু Formatting

`print()` সাধাৰণ output-ৰ বাবে সহজ পদ্ধতি।

```python
নাম = "ৰিমা"
নম্বৰ = 85

print("নাম:", নাম)
print(f"{নাম}-ৰ নম্বৰ {নম্বৰ}")
print("A", "B", "C", sep=" | ")
print("একে লাইনত", end=" ")
print("পৰৱৰ্তী শব্দ")
```

`sys.stdout.write()`-এ string লিখে, কিন্তু `print()`-ৰ দৰে নিজে newline যোগ নকৰে।

```python
import sys

sys.stdout.write("প্ৰথম line\\n")
sys.stdout.write("দ্বিতীয় line\\n")
```

## ৩.৫ Buffer (বাফাৰ) কি?

**Buffer** হৈছে ডেটা সাময়িকভাৱে জমা ৰখা মেম’ৰি অঞ্চল। ডেটা সৰু সৰু অংশত বাৰে বাৰে পঠিওৱাৰ সলনি কিছু ডেটা একেলগে স্থানান্তৰ কৰিলে বহু পৰিস্থিতিত কাম অধিক কাৰ্যকৰী হ'ব পাৰে।

উদাহৰণস্বৰূপে, program-এ প্ৰতিটো সৰু output-ৰ পিছতেই physical device-লৈ লিখাৰ সলনি output buffer-ত জমা ৰাখিব পাৰে। Buffer কেতিয়া খালী হ'ব সেয়া stream-ৰ ধৰণ, operating system, runtime আৰু program-ৰ আচৰণৰ ওপৰত নিৰ্ভৰ কৰে।

### Buffering-ৰ সাধাৰণ ধৰণ

- **Full buffering:** buffer পূৰ্ণ হ'লে বা stream বন্ধ হ'লে সাধাৰণতে ডেটা পঠিওৱা হয়।
- **Line buffering:** newline পালে বা stream-ৰ নিয়ম অনুসৰি buffer flush হ'ব পাৰে।
- **Unbuffered:** মধ্যৱৰ্তী user-space buffer নোহোৱাকৈ অধিক সোনকালে ডেটা পঠিওৱা হয়; তথাপি operating system-ৰ নিজা buffering থাকিব পাৰে।

এইবোৰ সাধাৰণ ধাৰণা; সকলো device আৰু Python stream-ত একে আচৰণ হ'ব বুলি ধৰা উচিত নহয়।

## ৩.৬ flush() কিয় ব্যৱহাৰ কৰা হয়?

`flush()`-এ stream-ৰ user-space output buffer-ত জমা থকা ডেটা underlying stream-লৈ পঠিয়াবলৈ অনুৰোধ কৰে।

```python
import sys

sys.stdout.write("প্ৰক্ৰিয়াটো চলি আছে...")
sys.stdout.flush()

# ইয়াৰ পিছত program-ৰ পৰৱৰ্তী কাম চলিব
```

`flush()`-এ buffer-ৰ ডেটা মচি নেপেলায়; ই ডেটা আগবঢ়ায়। ইয়াৰ অৰ্থ এইটোও নহয় যে ডেটা disk-ত স্থায়ীভাৱে লিখা সম্পূৰ্ণ হৈছে। Disk-ত durable write নিশ্চিত কৰিবলৈ file আৰু operating system-ৰ পৃথক নিয়ম আছে।

সাধাৰণ `print()`-ত `flush=True` দিব পাৰি:

```python
print("অপেক্ষা কৰক...", flush=True)
```

প্ৰতিটো output-ৰ পিছত flush কৰিলে কিছুমান ক্ষেত্ৰত performance কমিব পাৰে। প্ৰয়োজন অনুসৰি ব্যৱহাৰ কৰক।

## ৩.৭ File Stream: ফাইল পঢ়া

ফাইলক stream হিচাপে পঢ়িলে সকলো content একেলগে memory-ত ল'ব নালাগে। ডাঙৰ text file-ৰ ক্ষেত্ৰত line by line পঢ়া সুবিধাজনক।

```python
ফাইলৰ_নাম = "উদাহৰণ.txt"

with open(ফাইলৰ_নাম, "r", encoding="utf-8") as ফাইল:
    for লাইন_নং, লাইন in enumerate(ফাইল, start=1):
        print(f"{লাইন_নং}: {লাইন.rstrip()}")
```

- `open()`-এ ফাইল খোলে।
- `"r"`-ৰ অৰ্থ read mode।
- `encoding="utf-8"`-এ text decoding-ৰ encoding স্পষ্ট কৰে।
- `with` block শেষ হ'লে ফাইলটো স্বয়ংক্ৰিয়ভাৱে বন্ধ হয়।
- `enumerate()`-এ line number আৰু line দুয়ো দিয়ে।

UTF-8 সাধাৰণতে বহু ভাষাৰ text-ৰ বাবে উপযোগী। কিন্তু ফাইলটো অন্য encoding-ত থাকিলে সঠিক encoding নিৰ্বাচন কৰিব লাগিব।

## ৩.৮ File Stream: ফাইল লিখা

```python
বিষয়বস্তু = "এইটো প্ৰথম line.\\nএইটো দ্বিতীয় line.\\n"

with open("ফলাফল.txt", "w", encoding="utf-8") as ফাইল:
    ফাইল.write(বিষয়বস্তু)
```

সাধাৰণ mode:

| Mode | অৰ্থ |
|---|---|
| `"r"` | পঢ়া; ফাইল নাথাকিলে error |
| `"w"` | লিখা; আগৰ content মচি নতুনকৈ লিখে |
| `"a"` | শেষত নতুন content যোগ কৰে |
| `"x"` | নতুন ফাইল সৃষ্টি; আগতেই থাকিলে error |
| `"rb"` / `"wb"` | Binary mode-ত পঢ়া / লিখা |

**সাৱধান:** `"w"` mode-এ আগৰ ফাইলৰ content মচি পেলায়। গুৰুত্বপূৰ্ণ ফাইলত ব্যৱহাৰ কৰাৰ আগতে নিশ্চিত হওক।

## ৩.৯ Buffering parameter আৰু File Reading

Python-ৰ `open()`-ত `buffering` parameter ব্যৱহাৰ কৰিব পাৰি। উদাহৰণ:

```python
with open(
    "ডাঙৰ_ফাইল.txt",
    "r",
    encoding="utf-8",
    buffering=8192
) as ফাইল:
    for লাইন in ফাইল:
        if "গুৰুত্বপূৰ্ণ" in লাইন:
            print(লাইন.rstrip())
```

ইয়াত `8192` হৈছে buffering-ৰ আকাৰৰ parameter (সাধাৰণ byte-ভিত্তিক buffer size)। কিন্তু ইয়াৰ অৰ্থ এইটো নহয় যে program-এ প্ৰতিবাৰ ঠিক 8192 byte-হে পঢ়িব বা সকলো computer-ত একে performance পাব। Text stream-ত decoding আৰু আন buffer-ৰ স্তৰো থাকিব পাৰে।

ফাইল line by line পঢ়িলে সাধাৰণতে সম্পূৰ্ণ ফাইলটো একেলগে memory-ত লোৱাৰ প্ৰয়োজন নাথাকে। তথাপি line-ৰ আকাৰ অতি ডাঙৰ হ'লে সেই line-টোৱে memory ল'ব পাৰে।

## ৩.১০ Error Handling: ফাইল আৰু Input-ৰ ত্ৰুটি

ফাইল নাথাকিলে, permission নাথাকিলে বা input ভুল হ'লে program-এ error দিব পাৰে। `try` আৰু `except` ব্যৱহাৰ কৰি তেনে অৱস্থা নিয়ন্ত্ৰণ কৰিব পাৰি।

```python
try:
    with open("তথ্য.txt", "r", encoding="utf-8") as ফাইল:
        বিষয়বস্তু = ফাইল.read()
        print(বিষয়বস্তু)

except FileNotFoundError:
    print("ফাইলটো পোৱা নগ'ল।")

except PermissionError:
    print("ফাইল পঢ়াৰ অনুমতি নাই।")

except UnicodeDecodeError:
    print("ফাইলৰ encoding পঢ়িব পৰা নগ'ল।")
```

সকলো error-ৰ বাবে একেটা message দেখুওৱাতকৈ সম্ভৱ হ'লে নিৰ্দিষ্ট error চিনাক্ত কৰক। তেতিয়া সমস্যা সমাধান সহজ হয়।

## ৩.১১ অনুশীলনী

1. Input–Process–Output cycle-ৰ তিনিটা অংশৰ অৰ্থ লিখক।
2. `sys.stdin`, `sys.stdout` আৰু `sys.stderr`-ৰ কাম কি?
3. `input()`-এ সাধাৰণতে কোন ধৰণৰ value ঘূৰাই দিয়ে?
4. `split()` আৰু `map(int, ...)`-ৰ কাম বুজাওক।
5. `print()` আৰু `sys.stdout.write()`-ৰ এটা পাৰ্থক্য লিখক।
6. Buffer কিয় ব্যৱহাৰ কৰা হয়?
7. `flush()`-এ buffer-ৰ ডেটাৰ সৈতে কি কৰে?
8. `open("file.txt", "w")` ব্যৱহাৰ কৰিলে কি সাৱধানতা ল'ব লাগে?
9. ডাঙৰ text file line by line পঢ়াৰ এটা সুবিধা লিখক।
10. `FileNotFoundError` কেতিয়া হ'ব পাৰে?

### অনুশীলনীৰ উত্তৰ

1. Input-এ তথ্য গ্ৰহণ কৰে, Processing-এ তথ্যৰ ওপৰত কাম কৰে, Output-এ ফলাফল দিয়ে।
2. `stdin` input পঢ়ে, `stdout` সাধাৰণ output লিখে, `stderr` error বা diagnostic output লিখে।
3. String।
4. `split()`-এ string ভাগ কৰে; `map(int, ...)`-এ প্ৰতিটো অংশ integer-লৈ ৰূপান্তৰ কৰে।
5. `print()`-এ default-ভাৱে শেষত newline দিয়ে; `sys.stdout.write()`-এ নিজে newline যোগ নকৰে।
6. ডেটা সাময়িকভাৱে জমা কৰি স্থানান্তৰ অধিক কাৰ্যকৰী কৰিবলৈ।
7. User-space output buffer-ৰ ডেটা underlying stream-লৈ পঠিয়ায়; ডেটা মচি নেপেলায়।
8. `"w"` mode-এ আগৰ content মচি পেলাব পাৰে।
9. সম্পূৰ্ণ ফাইল একেলগে memory-ত ল'ব নালাগে।
10. নিৰ্দিষ্ট path-ত ফাইল নাথাকিলে।

## ৩.১২ অধিক পঢ়াৰ উৎস

- Python Official Tutorial — Input and Output: https://docs.python.org/3/tutorial/inputoutput.html
- Python `sys` module: https://docs.python.org/3/library/sys.html
- Python `open()` documentation: https://docs.python.org/3/library/functions.html#open
- Python `io` module: https://docs.python.org/3/library/io.html

## অধ্যায়ৰ সাৰাংশ

Input–Process–Output cycle-এ program-ৰ মৌলিক কাম বুজায়। Python-ৰ `stdin`, `stdout` আৰু `stderr`-এ standard input আৰু output নিয়ন্ত্ৰণ কৰে। Buffer-এ ডেটা সাময়িকভাৱে জমা ৰাখে; `flush()`-এ output buffer-ৰ ডেটা আগবঢ়ায়, মচি নেপেলায়। File stream-ৰ সহায়ত text line by line পঢ়িব বা লিখিব পাৰি। `with`, সঠিক encoding আৰু নিৰ্দিষ্ট error handling ব্যৱহাৰ কৰিলে file operation অধিক নিৰাপদ আৰু বুজিবলৈ সহজ হয়।`,
    },
    {
      id: 'ch-4',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৪: মেম’ৰি মডেল, টাইপ চিষ্টেম আৰু চলকৰ সত্যতা',
      subtitle: 'Python Objects, Names, Mutable vs Immutable, Copying আৰু Truthiness',
      estimatedReadTime: '30–40 min',
      topics: ['Object Identity and Type', 'Names and References', 'Dynamic Typing', 'Mutable and Immutable Objects', 'Shallow and Deep Copy', 'Equality vs Identity', 'Truthy and Falsy'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি Python object-ৰ identity, type আৰু value বুজাব পাৰিব; variable name আৰু reference-ৰ সম্পৰ্ক বুজিব পাৰিব; mutable/immutable, shallow/deep copy আৰু truthiness সঠিকভাৱে ব্যৱহাৰ কৰিব পাৰিব।

## ৪.১ Python Object Model

Python-ত integer, string, list, dictionary, function আদি সকলো object। প্ৰতিটো object-ৰ তিনিটা গুৰুত্বপূৰ্ণ বৈশিষ্ট্য থাকে:

- **Identity (পৰিচয়):** object-টোক আন object-ৰ পৰা পৃথককৈ চিনাক্ত কৰে।
- **Type (ধৰণ):** object-টোৰ ধৰণ; যেনে `int`, `str`, `list`।
- **Value (মান):** object-টোৱে প্ৰতিনিধিত্ব কৰা তথ্য।

```python
সংখ্যা = 256
print(type(সংখ্যা))  # <class 'int'>
print(id(সংখ্যা))    # identity-ৰ বাবে integer identifier
```

**সাৱধান:** `id()`-এ সদায় physical memory address দিয়ে বুলি ক'ব নোৱাৰি। Python-ৰ নিয়ম অনুসৰি ই object-ৰ identity-ৰ বাবে এটা integer ঘূৰাই দিয়ে। CPython-ত এই মান বহু ক্ষেত্ৰত memory address-ৰ সৈতে জড়িত হ'ব পাৰে, কিন্তু program-এ ইয়াক স্থায়ী memory address বুলি ধৰি ল'ব নালাগে। Object জীৱিত থকা সময়ত ইয়াৰ identity স্থিৰ থাকে।

## ৪.২ Variable Name আৰু Object Reference

Python-ত variable name-এ object-ৰ সৈতে bind হৈ থাকে। Assignment-এ সদায় নতুন object সৃষ্টি নকৰে।

```python
প্ৰথম = [10, 20, 30]
দ্বিতীয় = প্ৰথম
দ্বিতীয়.append(40)

print(প্ৰথম)   # [10, 20, 30, 40]
print(দ্বিতীয়) # [10, 20, 30, 40]
```

ইয়াত দুয়োটা নাম একেটা list object-লৈ reference কৰিছে। সেয়ে এটা নামৰ জৰিয়তে list সলনি কৰিলে আন নামৰ জৰিয়তেও সেই পৰিৱৰ্তন দেখা যায়।

### Equality (`==`) আৰু Identity (`is`)

- `==`-এ দুটা object-ৰ value সমান নে নহয় পৰীক্ষা কৰে।
- `is`-এ দুয়োটা reference একেটা object-লৈ গৈছে নে নাই পৰীক্ষা কৰে।

```python
ক = [1, 2, 3]
খ = [1, 2, 3]
গ = ক

print(ক == খ)  # True: value একে
print(ক is খ)  # False: পৃথক object
print(ক is গ)  # True: একেটা object
```

Value তুলনাৰ বাবে সাধাৰণতে `==` ব্যৱহাৰ কৰক। `is`-ৰ সঠিক আৰু প্ৰচলিত ব্যৱহাৰ হ'ল `None` পৰীক্ষা কৰা:

```python
ফলাফল = None
if ফলাফল is None:
    print("এতিয়াও কোনো ফলাফল নাই")
```

## ৪.৩ Dynamic Typing আৰু Type Annotation

Python dynamically typed language। Variable name-ৰ বাবে আগতীয়াকৈ স্থায়ী type ঘোষণা কৰাটো বাধ্যতামূলক নহয়।

```python
মান = 25
print(type(মান))  # <class 'int'>

মান = "পঁচিশ"
print(type(মান))  # <class 'str'>
```

Type পৰীক্ষাৰ বাবে `type()` আৰু `isinstance()` ব্যৱহাৰ কৰিব পাৰি।

```python
মান = 42
print(type(মান))
print(isinstance(মান, int))  # True
```

`isinstance()`-এ inheritance-ও বিবেচনা কৰে; সেয়ে বহু ক্ষেত্ৰত ই `type(x) == T`-তকৈ অধিক উপযোগী।

Type annotation-এ code পঢ়িবলৈ আৰু static analysis-ত সহায় কৰে। কিন্তু সাধাৰণ Python execution-ত annotation-এ নিজে নিজে value-ৰ type বাধ্যতামূলকভাৱে নিয়ন্ত্ৰণ নকৰে।

```python
বয়স: int = 20
বয়স = "বিশ"  # সাধাৰণ execution-ত Python-এ নিজে block নকৰে
print(বয়স)
```

## ৪.৪ Mutable আৰু Immutable Objects

**Mutable object**-ৰ content সৃষ্টি হোৱাৰ পিছতো সলনি কৰিব পাৰি। **Immutable object**-ৰ value সৃষ্টি হোৱাৰ পিছত সলনি কৰিব নোৱাৰি।

| ধৰণ | উদাহৰণ | আচৰণ |
|---|---|---|
| Immutable | `int`, `float`, `bool`, `str`, `bytes`, `frozenset` | নিজৰ value in-place সলনি কৰিব নোৱাৰি |
| Mutable | `list`, `dict`, `set`, `bytearray` | content সলনি কৰিব পাৰি |

`tuple` হৈছে immutable container; কিন্তু ইয়াৰ ভিতৰত mutable object থাকিলে সেই object-ৰ content সলনি হ'ব পাৰে।

```python
তথ্য = (["অসম"], 2026)
তথ্য[0].append("ভাষা")
print(তথ্য)  # (['অসম', 'ভাষা'], 2026)

# তথ্য[0] = ["নতুন"]  # TypeError: tuple-ৰ element replace কৰিব নোৱাৰি
```

### Immutable object-ৰ উদাহৰণ

```python
শব্দ = "অসম"
শব্দ = শব্দ + "ীয়া"
print(শব্দ)
```

String immutable। Concatenation-এ পুৰণি string-ৰ content সলনি নকৰে; নতুন string value সৃষ্টি কৰি নামটো নতুন object-ৰ সৈতে bind কৰে।

### Mutable object-ৰ উদাহৰণ

```python
সংখ্যা = [1, 2, 3]
সংখ্যা.append(4)
print(সংখ্যা)  # [1, 2, 3, 4]
```

List-টো একেই object হৈ থাকে; ইয়াৰ content সলনি হয়।

## ৪.৫ Shallow Copy আৰু Deep Copy

Nested list বা dictionary copy কৰোঁতে copy-ৰ গভীৰতা বুজাটো প্ৰয়োজন।

### Shallow Copy

Shallow copy-এ বাহিৰৰ container-টোৰ নতুন object সৃষ্টি কৰে, কিন্তু ভিতৰৰ nested object-সমূহৰ reference ভাগ কৰে।

```python
import copy

মূল = [[1, 2], [3, 4]]
নকল = copy.copy(মূল)

মূল[0][0] = 99
print(মূল)   # [[99, 2], [3, 4]]
print(নকল)   # [[99, 2], [3, 4]]
```

ভিতৰৰ list-টো একে object হোৱা বাবে দুয়ো ঠাইতে পৰিৱৰ্তন দেখা গৈছে।

### Deep Copy

Deep copy-এ nested object-সমূহো পুনৰ copy কৰাৰ চেষ্টা কৰে।

```python
import copy

মূল = [[1, 2], [3, 4]]
স্বতন্ত্ৰ_নকল = copy.deepcopy(মূল)

মূল[1][1] = 88
print(মূল)             # [[1, 2], [88, 4]]
print(স্বতন্ত্ৰ_নকল)   # [[1, 2], [3, 4]]
```

Deep copy-ও সকলো object-ৰ ক্ষেত্ৰত একে ধৰণে কাম কৰিব বুলি ধৰা উচিত নহয়। কিছুমান object copy কৰিব নোৱাৰি বা বিশেষ আচৰণ দেখুৱায়; custom class-এ copy-ৰ নিয়ম সলনি কৰিব পাৰে।

| পদ্ধতি | বাহিৰৰ object নতুন? | Nested reference ভাগ হয়? |
|---|---|---|
| `খ = ক` | নহয় | হয়, একেটা object |
| `copy.copy(ক)` | হয় | হয় |
| `copy.deepcopy(ক)` | হয় | সাধাৰণতে নহয়; recursive copy কৰে |

## ৪.৬ Truthiness: True আৰু False হিচাপে মূল্যায়ন

Python-ত কিছুমান value condition-ত `False` আৰু আন কিছুমান `True` হিচাপে আচৰণ কৰে। ইয়াক truthiness বোলা হয়।

সাধাৰণ falsy value:

- `False`, `None`
- সংখ্যাগত শূন্য: `0`, `0.0`, `0j`
- খালী string: `""`
- খালী container: `[]`, `()`, `{}`, `set()`, `range(0)`

সাধাৰণতে non-zero সংখ্যা আৰু non-empty container truthy হয়। Custom class-এ `__bool__()` বা `__len__()`-ৰ জৰিয়তে নিজৰ truthiness নিৰ্ধাৰণ কৰিব পাৰে।

```python
def সত্যতা_পৰীক্ষা(মান):
    if মান:
        return "Truthy"
    return "Falsy"

print(সত্যতা_পৰীক্ষা([]))       # Falsy
print(সত্যতা_পৰীক্ষা([0]))      # Truthy
print(সত্যতা_পৰীক্ষা(""))       # Falsy
print(সত্যতা_পৰীক্ষা("অসম"))    # Truthy
print(সত্যতা_পৰীক্ষা(0))        # Falsy
print(সত্যতা_পৰীক্ষা(None))     # Falsy
```

`[0]`-ত শূন্য সংখ্যা আছে, কিন্তু list-খন খালী নহয়। সেয়ে list-খন truthy।

## ৪.৭ সাধাৰণ ভুল আৰু সাৱধানতা

1. **`is`-ৰে সংখ্যা বা string তুলনা কৰা:** value তুলনাৰ বাবে সাধাৰণতে `==` ব্যৱহাৰ কৰক।
2. **Integer caching-ৰ ওপৰত নিৰ্ভৰ কৰা:** কিছুমান Python implementation-এ কিছুমান integer পুনৰ ব্যৱহাৰ কৰিব পাৰে। ইয়াক language guarantee বুলি নধৰিব।
3. **Assignment-ক copy বুলি ভবা:** `খ = ক`-এ নতুন list সৃষ্টি নকৰে।
4. **Shallow copy-ক সম্পূৰ্ণ স্বাধীন copy বুলি ভবা:** nested mutable object ভাগ হৈ থাকিব পাৰে।
5. **Type annotation-ক runtime validation বুলি ভবা:** annotation-এ নিজে type বাধ্যতামূলক নকৰে।
6. **সকলো tuple সম্পূৰ্ণৰূপে immutable বুলি ভবা:** ভিতৰৰ mutable object-ৰ content সলনি হ'ব পাৰে।

## ৪.৮ অনুশীলনী

1. Python object-ৰ Identity, Type আৰু Value বুজাওক।
2. `id()`-এ সদায় physical memory address দিয়ে নেকি?
3. `ক = [1, 2]` আৰু `খ = ক` হ'লে `খ.append(3)`-ৰ পিছত `ক`-ৰ মান কি?
4. `==` আৰু `is`-ৰ পাৰ্থক্য লিখক।
5. Dynamic typing বুলিলে কি বুজায়?
6. Type annotation-এ সাধাৰণ execution-ত ভুল type assignment বাধা দিয়ে নেকি?
7. Mutable আৰু immutable object-ৰ দুটাকৈ উদাহৰণ দিয়ক।
8. Shallow copy-ত nested list সলনি কৰিলে মূল আৰু নকল দুয়োটাত কিয় প্ৰভাৱ পৰে?
9. `copy.deepcopy()` কেতিয়া উপযোগী?
10. `[]`, `[0]`, `0` আৰু `"অসম"`-ৰ ভিতৰত কোনবোৰ truthy?
11. `None` পৰীক্ষা কৰিবলৈ `is None` কিয় ব্যৱহাৰ কৰা হয়?
12. Tuple-ৰ ভিতৰৰ list-ত `append()` চলাব পাৰি নে? কাৰণ লিখক।

### অনুশীলনীৰ উত্তৰ

1. Identity-এ object চিনাক্ত কৰে, Type-এ ধৰণ জনায়, Value-এ তথ্য জনায়।
2. নহয়। ই identity-ৰ integer identifier দিয়ে; সদায় physical address নহয়।
3. `[1, 2, 3]`; দুয়োটা নাম একে list object-লৈ reference কৰিছে।
4. `==` value তুলনা কৰে; `is` একে object নে পৰীক্ষা কৰে।
5. Variable name-এ program চলি থাকোঁতে বিভিন্ন type-ৰ object-ৰ সৈতে bind হ'ব পাৰে।
6. নহয়। Annotation মূলত documentation আৰু static analysis-ত সহায় কৰে।
7. Mutable: list, dict। Immutable: int, str।
8. Shallow copy-এ nested object-ৰ reference ভাগ কৰে।
9. Nested mutable data-ৰ অধিক স্বাধীন copy প্ৰয়োজন হ'লে।
10. `[0]` আৰু `"অসম"` truthy; `[]` আৰু `0` falsy।
11. `None` singleton object; `is None` identity সঠিকভাৱে পৰীক্ষা কৰে।
12. হয়। ভিতৰৰ list mutable; কিন্তু tuple-ৰ element-টো replace কৰিব নোৱাৰি।

## ৪.৯ অধিক পঢ়াৰ উৎস

- Python Data Model: https://docs.python.org/3/reference/datamodel.html
- Built-in Functions (`id`, `type`, `isinstance`): https://docs.python.org/3/library/functions.html
- `copy` module: https://docs.python.org/3/library/copy.html
- Truth Value Testing: https://docs.python.org/3/library/stdtypes.html#truth-value-testing

## অধ্যায়ৰ সাৰাংশ

Python-ত variable name-এ object-ৰ সৈতে bind হয়। Object-ৰ identity, type আৰু value থাকে। `==`-এ value তুলনা কৰে, আনহাতে `is`-এ identity তুলনা কৰে। Mutable object-ৰ content সলনি কৰিব পাৰি; immutable object-ৰ value সলনি কৰিব নোৱাৰি। Assignment-এ নতুন copy সৃষ্টি নকৰে। Shallow copy-এ nested reference ভাগ কৰে, কিন্তু deep copy-এ nested object-সমূহো copy কৰাৰ চেষ্টা কৰে। Condition-ত value-ৰ truthiness ব্যৱহাৰ হয়; খালী container আৰু শূন্য সাধাৰণতে falsy, কিন্তু non-empty container truthy।`,
    },
    {
      id: 'ch-5',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৫: আধুনিক নিয়ন্ত্ৰণ প্ৰৱাহ আৰু পেটাৰ্ণ মেচিং',
      subtitle: 'Structural Pattern Matching (Python 3.10+), Enumerate, Zip আৰু Itertools',
      estimatedReadTime: '25–35 min',
      topics: ['Structural Pattern Matching', 'Sequence and Mapping Patterns', 'OR Patterns and Guards', 'Enumerate', 'Zip and Strict Zip', 'Itertools'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- Python 3.10-ৰ `match-case` syntax বুজিব পাৰিব।
- Sequence pattern, mapping pattern আৰু OR pattern চিনিব পাৰিব।
- Pattern guard-ৰ সহায়ত অতিৰিক্ত চৰ্ত পৰীক্ষা কৰিব পাৰিব।
- `enumerate()` আৰু `zip()`-ৰে loop অধিক স্পষ্ট কৰিব পাৰিব।
- `itertools`-ৰ কেইটামান উপযোগী function ব্যৱহাৰ কৰিব পাৰিব।
- Pattern matching-ৰ সীমা আৰু সাধাৰণ ভুল বুজিব পাৰিব।

## ৫.১ Structural Pattern Matching কি?

Python 3.10-ৰ পৰা `match` আৰু `case` ব্যৱহাৰ কৰি এটা value-ৰ গঠন অনুসৰি বিভিন্ন code চলাব পাৰি। ইয়াক Structural Pattern Matching বোলা হয়।

ই কেৱল C বা Java-ৰ সাধাৰণ switch statement-ৰ দৰে নহয়। ইয়াত sequence, mapping আৰু class-ৰ গঠনো pattern হিচাপে পৰীক্ষা কৰিব পাৰি।

```python
দিন = 3

match দিন:
    case 1:
        নাম = "সোমবাৰ"
    case 2:
        নাম = "মঙলবাৰ"
    case 3:
        নাম = "বুধবাৰ"
    case _:
        নাম = "অন্য দিন"

print(নাম)
```

`case _` হৈছে wildcard pattern। ই যিকোনো value-ৰ সৈতে match কৰে আৰু value-টো কোনো variable-ত bind নকৰে। সাধাৰণতে ইয়াক শেষৰ default case হিচাপে ৰখা হয়।

## ৫.২ Mapping Pattern: Dictionary অনুসৰি Match

Mapping pattern-এ dictionary-ৰ নিৰ্দিষ্ট key আৰু value পৰীক্ষা কৰিব পাৰে।

```python
def আদেশ_প্ৰচেছ_কৰা(কমাণ্ড):
    match কমাণ্ড:
        case {
            "action": "move",
            "direction": ("north" | "south" | "east" | "west") as দিশ,
            "steps": int() as খোজ
        } if type(খোজ) is int and খোজ > 0:
            return f"ৰব'ট {খোজ} খোজ {দিশ} দিশত আগবাঢ়িব।"

        case {
            "action": "sleep",
            "duration": int() as ছেকেণ্ড
        } if type(ছেকেণ্ড) is int and ছেকেণ্ড >= 0:
            return f"ৰব'ট {ছেকেণ্ড} ছেকেণ্ড জিৰণি ল'ব।"

        case {
            "action": "message",
            "text": str() as বাৰ্তা
        }:
            return f"বাৰ্তা: {বাৰ্তা}"

        case _:
            return "অজ্ঞাত বা ভুল format-ৰ আদেশ।"


print(আদেশ_প্ৰচেছ_কৰা({
    "action": "move",
    "direction": "north",
    "steps": 5
}))
print(আদেশ_প্ৰচেছ_কৰা({
    "action": "sleep",
    "duration": 10
}))
print(আদেশ_প্ৰচেছ_কৰা({"action": "dance"}))
```

ইয়াত:
- `"action": "move"`-এ key-ৰ value পৰীক্ষা কৰে।
- `("north" | "south" | "east" | "west")` হৈছে OR pattern; চাৰিটাৰ যিকোনো এটা value match কৰিব।
- `as দিশ`-এ matched value-টো `দিশ` নামত bind কৰে।
- `int() as খোজ`-এ integer instance-ৰ pattern পৰীক্ষা কৰি value bind কৰে।
- `if`-ৰ পিছৰ অংশটো pattern guard। ই অতিৰিক্ত চৰ্ত পৰীক্ষা কৰে।

**বিশেষ সাৱধানতা:** Python-ত `bool` হৈছে `int`-ৰ subclass। সেয়ে কেৱল `int()` pattern-এ `True` আৰু `False`-কো integer হিচাপে match কৰিব পাৰে। উদাহৰণত `type(খোজ) is int` ব্যৱহাৰ কৰি boolean-ৰ দৰে value বাদ দিয়া হৈছে।

Mapping pattern-এ dictionary-ত উল্লেখ কৰা key-সমূহ থাকিলেই match কৰিব পাৰে; অতিৰিক্ত key থাকিলেও সাধাৰণতে সমস্যা নহয়। সকলো key-হে থাকিব লাগিব বুলি ধৰা উচিত নহয়।

## ৫.৩ Sequence Pattern আৰু Unpacking

Sequence pattern-এ list বা tuple-ৰ দৰে sequence-ৰ গঠন পৰীক্ষা কৰিব পাৰে।

```python
বিন্দু = (10, 20)

match বিন্দু:
    case (0, 0):
        print("মূলবিন্দু")
    case (x, 0):
        print(f"X অক্ষত অৱস্থান: {x}")
    case (0, y):
        print(f"Y অক্ষত অৱস্থান: {y}")
    case (x, y):
        print(f"বিন্দুৰ অৱস্থান: ({x}, {y})")
```

### Star Pattern

```python
সংখ্যাসমূহ = [10, 20, 30, 40]

match সংখ্যাসমূহ:
    case [প্ৰথম, দ্বিতীয়, *বাকী]:
        print("প্ৰথম দুটা:", প্ৰথম, দ্বিতীয়)
        print("বাকী:", বাকী)
    case _:
        print("অন্তত দুটা element নাই")
```

`*বাকী`-এ বাকী element-সমূহক এখন list হিচাপে bind কৰে। এই pattern-এ অন্তত দুটা element থকা sequence-ৰ সৈতে match কৰে।

## ৫.৪ Pattern Matching-ত Capture আৰু Literal-ৰ পাৰ্থক্য

এটা সাধাৰণ ভুল হ'ল `case নাম:` লিখি `নাম`-ক আগতে নিৰ্ধাৰিত variable-ৰ value বুলি ভবা। Python-ত bare name pattern সাধাৰণতে capture pattern; ই যিকোনো matched value-টো সেই নামত bind কৰে।

```python
কোড = 404

match কোড:
    case 200:
        print("সফল")
    case 404:
        print("পৃষ্ঠা পোৱা নগ'ল")
    case _:
        print("অন্য ফলাফল")
```

নিৰ্দিষ্ট integer বা string value match কৰিবলৈ literal pattern ব্যৱহাৰ কৰক। Constant-ৰ ক্ষেত্ৰত dotted name ব্যৱহাৰ কৰিব পাৰি, যেনে `HTTP.OK`। Bare variable name-ক constant pattern বুলি ধৰি নল'ব।

## ৫.৫ Guard ব্যৱহাৰ

Pattern match হোৱাৰ পিছত অতিৰিক্ত চৰ্ত পৰীক্ষা কৰিবলৈ `if` guard ব্যৱহাৰ কৰা হয়।

```python
সংখ্যা = 18

match সংখ্যা:
    case int() as n if n < 0:
        print("ঋণাত্মক")
    case int() as n if n == 0:
        print("শূন্য")
    case int() as n if n > 0:
        print("ধনাত্মক")
    case _:
        print("Integer নহয়")
```

Pattern-এ গঠন পৰীক্ষা কৰে; guard-এ matched value-ৰ ওপৰত অতিৰিক্ত logical condition পৰীক্ষা কৰে।

## ৫.৬ enumerate(): Index আৰু Value একেলগে

List বা আন iterable-ৰ প্ৰতিটো item-ৰ লগতে index পাবলৈ `enumerate()` ব্যৱহাৰ কৰা হয়।

```python
ফলসমূহ = ["আপেল", "কলা", "আঙুৰ"]

for সূচী, ফল in enumerate(ফলসমূহ, start=1):
    print(f"{সূচী}. {ফল}")
```

সম্ভাৱ্য output:

```text
1. আপেল
2. কলা
3. আঙুৰ
```

`start=1` দিলে গণনা 1-ৰ পৰা আৰম্ভ হয়। Default-ভাৱে index 0-ৰ পৰা আৰম্ভ হয়। `enumerate()`-এ iterable-ৰ item-সমূহৰ সৈতে index-ৰ জোৰা দিয়ে; ই নিজে সম্পূৰ্ণ list সৃষ্টি নকৰে।

## ৫.৭ zip(): একাধিক Iterable একেলগে চলোৱা

`zip()`-এ কেইবাটাও iterable-ৰ item-সমূহক অৱস্থান অনুসৰি জোৰা লগায়।

```python
নামসমূহ = ["ৰিকু", "জয়ন্ত", "প্ৰিয়া"]
বয়সসমূহ = [25, 30, 22]

for নাম, বয়স in zip(নামসমূহ, বয়সসমূহ):
    print(f"{নাম}: {বয়স} বছৰ")
```

সাধাৰণ `zip()`-এ আটাইতকৈ চুটি iterable শেষ হ'লে থামে। সেয়ে দৈৰ্ঘ্য বেলেগ হ'লে কিছুমান item বাদ পৰিব পাৰে।

Python 3.10+ ত `strict=True` ব্যৱহাৰ কৰি দৈৰ্ঘ্য বেলেগ হ'লে error উলিয়াব পাৰি:

```python
নামসমূহ = ["ৰিকু", "জয়ন্ত"]
বয়সসমূহ = [25, 30]

for নাম, বয়স in zip(নামসমূহ, বয়সসমূহ, strict=True):
    print(নাম, বয়স)
```

ইয়াত দুয়োটা iterable-ৰ দৈৰ্ঘ্য একে। দৈৰ্ঘ্য বেলেগ হ'লে `ValueError` হ'ব। যেতিয়া সকলো data pair মিলিব লাগিব, তেতিয়া `strict=True` উপযোগী।

## ৫.৮ itertools: Iterator-ৰ বাবে উপযোগী সঁজুলি

`itertools` Python-ৰ standard library-ৰ module। ই iterable-ৰ ওপৰত memory-দক্ষভাৱে কাম কৰাৰ function প্ৰদান কৰে। ইয়াৰ বহু function-এ iterator ঘূৰাই দিয়ে; প্ৰয়োজন হ'লেহে `list()`-ৰে সকলো ফলাফল একেলগে materialize কৰক।

### combinations(): ক্ৰম গুৰুত্ব নোপোৱা জোৰা

```python
from itertools import combinations

ফলাফল = combinations([1, 2, 3], 2)
print(list(ফলাফল))
# [(1, 2), (1, 3), (2, 3)]
```

ইয়াত একে item পুনৰ ব্যৱহাৰ নকৰাকৈ 2টা item-ৰ combination পোৱা যায়। `(1, 2)` আৰু `(2, 1)` পৃথক ফলাফল নহয়।

### permutations(): ক্ৰম গুৰুত্বপূৰ্ণ

```python
from itertools import permutations

print(list(permutations(["A", "B"], 2)))
# [('A', 'B'), ('B', 'A')]
```

Permutation-ত ক্ৰম বেলেগ হ'লে ফলাফল বেলেগ হয়।

### product(): Cartesian Product

```python
from itertools import product

ৰং = ["ৰঙা", "নীলা"]
আকাৰ = ["সৰু", "ডাঙৰ"]

for ৰ, আ in product(ৰং, আকাৰ):
    print(ৰ, আ)
```

ই সকলো সম্ভৱ জোৰা সৃষ্টি কৰে। Input set-ৰ আকাৰ বাঢ়িলে ফলাফলৰ সংখ্যাও দ্ৰুতগতিত বাঢ়িব পাৰে।

### islice(): Iterator-ৰ নিৰ্দিষ্ট অংশ

```python
from itertools import islice

সংখ্যা = range(1000000)

for n in islice(সংখ্যা, 5):
    print(n)
```

ইয়াত প্ৰথম পাঁচটা item-হে পঢ়া হৈছে। সম্পূৰ্ণ এক million item-ৰ list সৃষ্টি কৰা হোৱা নাই।

## ৫.৯ কোনটো কেতিয়া ব্যৱহাৰ কৰিব?

| সঁজুলি | উপযোগী পৰিস্থিতি |
|---|---|
| `match-case` | value-ৰ গঠন অনুসৰি বিভিন্ন পথ বাছনি |
| `enumerate()` | item-ৰ লগতে index লাগে |
| `zip()` | একাধিক iterable-ৰ item একেলগে লাগে |
| `zip(strict=True)` | সকলো iterable-ৰ দৈৰ্ঘ্য মিলিবই লাগিব |
| `combinations()` | ক্ৰম নধৰি বাছনিৰ গোট |
| `permutations()` | ক্ৰম অনুসৰি বিন্যাস |
| `product()` | সকলো সম্ভৱ জোৰা বা combination |
| `islice()` | iterator-ৰ নিৰ্দিষ্ট অংশ লোৱা |

## ৫.১০ সাধাৰণ ভুল আৰু সাৱধানতা

1. **Python version:** `match-case` আৰু `zip(strict=True)`-ৰ বাবে Python 3.10 বা তাৰ পিছৰ version লাগে।
2. **Bare name pattern:** `case x:`-এ সাধাৰণতে value-টো `x`-ত capture কৰে; আগৰ `x`-ৰ value match নকৰে।
3. **Wildcard:** `case _:` যিকোনো value match কৰে; সাধাৰণতে শেষত ৰাখক।
4. **Mapping pattern:** উল্লেখ কৰা key-সমূহ match হ'লেই অতিৰিক্ত key থাকিব পাৰে।
5. **zip truncation:** সাধাৰণ `zip()`-এ চুটি iterable শেষ হ'লে থামে।
6. **Iterator এবাৰ ব্যৱহাৰ:** বহু iterator consume কৰিলে আগৰ item পুনৰ নাপাবও পাৰে।
7. **অতি ডাঙৰ list:** `list(combinations(...))` বা `list(product(...))`-এ বিপুল memory ল'ব পাৰে।

## ৫.১১ অনুশীলনী

1. Structural Pattern Matching কোন Python version-ৰ পৰা আহিছে?
2. `case _:`-ৰ কাম কি?
3. Mapping pattern-এ dictionary-ৰ অতিৰিক্ত key থাকিলে match কৰিব পাৰেনে?
4. `case x:`-ত `x` capture pattern নে আগৰ variable-ৰ value?
5. Pattern guard কি?
6. `enumerate(["ক", "খ"], start=1)`-এ কি ধৰণৰ জোৰা দিয়ে?
7. সাধাৰণ `zip()`-এ iterable-ৰ দৈৰ্ঘ্য বেলেগ হ'লে কি কৰে?
8. `zip(strict=True)`-এ দৈৰ্ঘ্য বেলেগ হ'লে কি কৰে?
9. `combinations([1, 2, 3], 2)`-ৰ ফলাফল লিখক।
10. `permutations(["A", "B"], 2)`-ত কিমানটা ফলাফল থাকে?
11. `islice(range(100), 3)`-এ কিমানটা item দিয়ে?
12. Iterator-ৰ সকলো item একেলগে list-ত সলনি কৰিলে কি অসুবিধা হ'ব পাৰে?

### অনুশীলনীৰ উত্তৰ

1. Python 3.10।
2. যিকোনো value match কৰা wildcard/default pattern।
3. হয়; pattern-ত উল্লেখ কৰা key-সমূহ match হ'লে অতিৰিক্ত key থাকিব পাৰে।
4. Capture pattern; matched value-টো `x`-ত bind হয়।
5. Pattern match হোৱাৰ পিছত `if`-ৰে অতিৰিক্ত চৰ্ত পৰীক্ষা কৰা।
6. `(1, "ক")` আৰু `(2, "খ")`-ৰ দৰে index-value pair।
7. আটাইতকৈ চুটি iterable শেষ হ'লে থামে।
8. দৈৰ্ঘ্য বেলেগ হ'লে `ValueError` দিয়ে।
9. `(1, 2)`, `(1, 3)`, `(2, 3))।
10. দুটা: `("A", "B")` আৰু `("B", "A")`।
11. তিনিটা item: 0, 1, 2।
12. ডাঙৰ iterator সম্পূৰ্ণ materialize কৰিলে অধিক memory লাগিব পাৰে।

## ৫.১২ অধিক পঢ়াৰ উৎস

- Python Tutorial — Structural Pattern Matching: https://docs.python.org/3/tutorial/controlflow.html#match-statements
- Python Language Reference — Patterns: https://docs.python.org/3/reference/compound_stmts.html#the-match-statement
- Built-in Functions — `enumerate()` আৰু `zip()`: https://docs.python.org/3/library/functions.html
- Python `itertools` documentation: https://docs.python.org/3/library/itertools.html

## অধ্যায়ৰ সাৰাংশ

Structural Pattern Matching-এ value-ৰ গঠন অনুসৰি program-ৰ পথ বাছনি কৰিবলৈ সহায় কৰে। Mapping আৰু sequence pattern-এ dictionary, list আৰু tuple-ৰ গঠন পৰীক্ষা কৰিব পাৰে; guard-এ অতিৰিক্ত চৰ্ত যোগ কৰে। `enumerate()`-এ index আৰু item একেলগে দিয়ে, `zip()`-এ একাধিক iterable-ৰ item জোৰা লগায়। `itertools`-এ combinations, permutations, Cartesian product আৰু iterator-ৰ অংশ লোৱাৰ দৰে কাম সহজ কৰে। সঠিক Python version, pattern capture-ৰ নিয়ম, zip-ৰ দৈৰ্ঘ্য আৰু iterator-ৰ memory ব্যৱহাৰ মনত ৰাখিব লাগে।`,
    },
    {
      id: 'ch-6',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৬: লুপ, ইটাৰেটৰ প্ৰট’কল আৰু জেনেৰেটৰ',
      subtitle: 'Iterator Protocol, Generators, Yield আৰু Context Managers',
      estimatedReadTime: '8 min',
      topics: ['__iter__ and __next__', 'Generators & Yield', 'Generator Expressions', 'Context Managers'],
      content: `## ৬.১ অধ্যায়টোৰ লক্ষ্য

এই অধ্যায়ৰ শেষত আপুনি—

- Iterable, Iterator আৰু Iterator Protocol-ৰ পাৰ্থক্য বুজিব পাৰিব।
- \`iter()\` আৰু \`next()\` কেনেকৈ কাম কৰে বুজিব পাৰিব।
- নিজৰ Iterator Class লিখিব পাৰিব।
- Generator Function, \`yield\`, \`yield from\` আৰু Generator Expression ব্যৱহাৰ কৰিব পাৰিব।
- Lazy Evaluation-ৰ সুবিধা আৰু সীমাবদ্ধতা চিনাক্ত কৰিব পাৰিব।
- \`with\` আৰু Context Manager-ৰ জৰিয়তে সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ কৰিব পাৰিব।

## ৬.২ লুপৰ ভিতৰৰ প্ৰক্ৰিয়া

আমি সাধাৰণতে \`for\` লুপ এনেদৰে লিখোঁ—

~~~python
ফল = [10, 20, 30]

for মান in ফল:
    print(মান)
~~~

কিন্তু Python-এ প্ৰতিটো বস্তুৰ ক্ষেত্ৰত নিজে নিজে পৰৱৰ্তী মান কেনেকৈ পাব? ইয়াৰ উত্তৰ হৈছে **Iterator Protocol**। \`for\` লুপে প্ৰথমে বস্তুটোৰ পৰা এটা iterator পায়, তাৰ পিছত এটাৰ পিছত এটা মান বিচাৰে। মান শেষ হ'লে iterator-এ \`StopIteration\` সংকেত দিয়ে আৰু লুপ বন্ধ হয়।

## ৬.৩ Iterable আৰু Iterator-ৰ পাৰ্থক্য

**Iterable (পুনৰাবৃত্তিযোগ্য বস্তু):** যিটো বস্তুৰ পৰা \`iter(obj)\` ব্যৱহাৰ কৰি iterator পোৱা যায়, সেয়া iterable। উদাহৰণ: list, tuple, string, dictionary আৰু set।

**Iterator (ইটাৰেটৰ):** যিটো বস্তুৱে \`next(obj)\`-ৰ জৰিয়তে পৰৱৰ্তী মান দিয়ে আৰু শেষ হ'লে \`StopIteration\` তোলে, সেয়া iterator।

~~~python
সংখ্যা = [10, 20, 30]  # Iterable
ইটাৰেটৰ = iter(সংখ্যা)  # Iterator

print(next(ইটাৰেটৰ))  # 10
print(next(ইটাৰেটৰ))  # 20
print(next(ইটাৰেটৰ))  # 30

# পৰৱৰ্তী next() কৰিলে StopIteration হ'ব
~~~

এটা list নিজে iterator নহয়; কিন্তু তাৰ পৰা iterator তৈয়াৰ কৰিব পাৰি। Iterator সাধাৰণতে নিজৰ অৱস্থা (state) ৰাখে। ওপৰৰ উদাহৰণত কোনটো মান শেষবাৰ দিয়া হ'ল, সেই অৱস্থা iterator-এ মনত ৰাখে।

## ৬.৪ Iterator Protocol: \`__iter__()\` আৰু \`__next__()\`

এটা iterator-এ দুটা বিশেষ পদ্ধতি সমৰ্থন কৰে—

1. \`__iter__()\`: iterator-টো নিজেই ঘূৰাই দিয়ে।
2. \`__next__()\`: পৰৱৰ্তী মান ঘূৰাই দিয়ে; মান শেষ হ'লে \`StopIteration\` তোলে।

নিজৰ iterator class-ৰ উদাহৰণ—

~~~python
class গণনা_ইটাৰেটৰ:
    def __init__(self, আৰম্ভণি, শেষ):
        self.বৰ্তমান = আৰম্ভণি
        self.শেষ = শেষ

    def __iter__(self):
        return self

    def __next__(self):
        if self.বৰ্তমান >= self.শেষ:
            raise StopIteration

        মান = self.বৰ্তমান
        self.বৰ্তমান += 1
        return মান


সংখ্যা = গণনা_ইটাৰেটৰ(5, 10)

for মান in সংখ্যা:
    print(মান)
~~~

আউটপুট:

~~~text
5
6
7
8
9
~~~

**মন কৰিব:** এই class-ৰ iterator-টো একেটা অৱস্থা ব্যৱহাৰ কৰে। এবাৰ শেষ হোৱাৰ পিছত একেটা object-ৰ পৰা পুনৰ আৰম্ভ নহয়। নতুন গণনা পাবলৈ নতুন object তৈয়াৰ কৰিব লাগে। \`__next__()\`-এ শেষ অৱস্থাত \`StopIteration\` তুলিবই লাগিব; নহ'লে \`for\` লুপ সঠিকভাৱে বন্ধ নহ'ব পাৰে।

## ৬.৫ Generator: কম ক'ডেৰে Iterator

Generator হৈছে iterator তৈয়াৰ কৰাৰ সহজ উপায়। সাধাৰণ function-ত \`return\`-এ function-ৰ কাম শেষ কৰে। Generator function-ত \`yield\`-এ এটা মান দিয়ে আৰু function-ৰ অৱস্থা স্থগিত ৰাখে। পিছৰবাৰ \`next()\` কৰিলে সেই স্থানৰ পৰাই পুনৰ চলিবলৈ আৰম্ভ কৰে।

~~~python
def একৰ_পৰা_পাঁচলৈ():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5


ইটাৰেটৰ = একৰ_পৰা_পাঁচলৈ()

print(next(ইটাৰেটৰ))  # 1
print(next(ইটাৰেটৰ))  # 2
print(next(ইটাৰেটৰ))  # 3
~~~

Generator function-টো কল কৰিলেই ইয়াৰ ভিতৰৰ সকলো ক'ড চলি নাযায়; ই এটা generator object ঘূৰাই দিয়ে। মান বিচৰাৰ সময়তহে প্ৰয়োজনীয় অংশ চলে। সকলো মান একেলগে list-ত জমা নকৰাৰ বাবে ডাঙৰ ডেটাৰ ক্ষেত্ৰত মেম'ৰি ৰাহি হ'ব পাৰে।

## ৬.৬ Generator-ৰ অৱস্থা আৰু \`yield\`

তলৰ উদাহৰণটো লক্ষ্য কৰক—

~~~python
def গণনা():
    print("প্ৰথম ধাপ")
    yield 10

    print("দ্বিতীয় ধাপ")
    yield 20

    print("শেষ ধাপ")


g = গণনা()
print("Generator তৈয়াৰ হ'ল")
print(next(g))
print(next(g))
~~~

আউটপুটৰ ক্ৰম—

~~~text
Generator তৈয়াৰ হ'ল
প্ৰথম ধাপ
10
দ্বিতীয় ধাপ
20
~~~

শেষৰ \`next(g)\`-টোও কল কৰিলে "শেষ ধাপ" ছপা হ'ব আৰু তাৰ পিছত \`StopIteration\` উঠিব। Generator-এ \`yield\`-ৰ পিছৰ অৱস্থা সংৰক্ষণ কৰে; স্থানীয় variable-সমূহো পৰৱৰ্তী ধাপলৈ থাকি যায়।

## ৬.৭ অসীম ধাৰা আৰু Fibonacci Generator

Generator-এ অসীম ধাৰাও সৃষ্টি কৰিব পাৰে। কিন্তু অসীম generator-ৰ ওপৰত সীমাহীন \`for\` লুপ চলালে প্ৰগ্ৰাম বন্ধ নহ'বও পাৰে। সেয়ে কিমানটা মান লাগিব, সেই সীমা নিৰ্ধাৰণ কৰা উচিত।

~~~python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


for সংখ্যা in fibonacci():
    if সংখ্যা > 100:
        break
    print(সংখ্য, end=" ")
~~~

আউটপুট:

~~~text
0 1 1 2 3 5 8 13 21 34 55 89
~~~

ইয়াত \`yield\`-এ এটা Fibonacci সংখ্যা দিয়ে আৰু পৰৱৰ্তী সংখ্যাৰ বাবে অৱস্থা ৰাখে। \`break\`-এ 100-তকৈ ডাঙৰ মান পোৱাৰ আগতেই লুপ বন্ধ কৰে।

## ৬.৮ Generator Expression

List comprehension-এ সকলো ফলাফলৰ list তৈয়াৰ কৰে; Generator Expression-এ প্ৰয়োজন অনুসৰি এটাকৈ মান দিয়ে।

~~~python
# List comprehension
বৰ্গৰ_তালিকা = [x * x for x in range(5)]
print(বৰ্গৰ_তালিকা)

# Generator Expression
বৰ্গৰ_জেনেৰেটৰ = (x * x for x in range(5))
print(next(বৰ্গৰ_জেনেৰেটৰ))  # 0
print(next(বৰ্গৰ_জেনেৰেটৰ))  # 1
~~~

দুয়োটাৰ ফলাফলৰ ধৰণ একে নহয়। প্ৰথমটোৱে list দিয়ে, দ্বিতীয়টোৱে generator object দিয়ে। Generator-টো এবাৰ সম্পূৰ্ণ ব্যৱহাৰ কৰিলে সেই একেটা object-ৰ পৰা পুনৰ আৰম্ভ কৰিব নোৱাৰি।

## ৬.৯ \`yield from\`: আন Iterable-ৰ মান আগবঢ়োৱা

এটা generator-ৰ ভিতৰত আন iterable-ৰ মান এটাৰ পিছত এটা আগবঢ়াবলৈ \`yield from\` ব্যৱহাৰ কৰিব পাৰি।

~~~python
def সকলো_সংখ্যা():
    yield from [1, 2, 3]
    yield from (4, 5)

for মান in সকলো_সংখ্যা():
    print(মান, end=" ")
~~~

আউটপুট:

~~~text
1 2 3 4 5
~~~

ইয়াৰ অৰ্থ হৈছে list আৰু tuple-ৰ প্ৰতিটো মান generator-ৰ পৰা এটাকৈ yield কৰা। ডাঙৰ generator-সমূহ সৰু সৰু generator-ত ভাগ কৰি লিখিবলৈ ই সহায়ক।

## ৬.১০ Lazy Evaluation: প্ৰয়োজনৰ সময়তহে গণনা

Lazy Evaluation-ৰ অৰ্থ হৈছে ফলাফল আগতীয়াকৈ সকলো গণনা নকৰি, প্ৰয়োজন হ'লেহে গণনা কৰা। Generator ইয়াৰ এটা উদাহৰণ।

~~~python
def ডাঙৰ_গণনা():
    for সংখ্যা in range(1, 1000001):
        yield সংখ্যা * 2

g = ডাঙৰ_গণনা()
print(next(g))  # 2
print(next(g))  # 4
~~~

এই উদাহৰণত এক মিলিয়ন মানৰ list আগতেই তৈয়াৰ কৰা হোৱা নাই। কিন্তু মনত ৰাখিব—Generator সদায় list-তকৈ দ্ৰুত হ'ব বুলি ক'ব নোৱাৰি। বাৰে বাৰে একে ফলাফল লাগে আৰু ডেটা সৰু হয়, তেতিয়া list সুবিধাজনক হ'ব পাৰে। Generator-ৰ মান এবাৰ পাৰ হৈ গ'লে সাধাৰণতে পিছলৈ ঘূৰি যাব নোৱাৰি।

## ৬.১১ Generator বন্ধ কৰা আৰু ব্যতিক্ৰম

Generator স্বাভাৱিকভাৱে শেষ হ'লে বা \`close()\` কল কৰিলে বন্ধ হয়। Generator-ৰ ভিতৰত \`finally\` ব্যৱহাৰ কৰি পৰিষ্কাৰ-পৰিচ্ছন্নতাৰ কাম কৰিব পাৰি।

~~~python
def তথ্য_উৎপাদক():
    try:
        yield "প্ৰথম তথ্য"
        yield "দ্বিতীয় তথ্য"
    finally:
        print("Generator-ৰ পৰিষ্কাৰ কাম সম্পূৰ্ণ")

g = তথ্য_উৎপাদক()
print(next(g))
g.close()
~~~

\`close()\`-এ generator-ত \`GeneratorExit\` সংকেত প্ৰেৰণ কৰে। সাধাৰণতে ইয়াক ধৰি generator-ৰ পৰিষ্কাৰ কাম কৰা হয়; \`finally\` block-টো চলিব পাৰে।

## ৬.১২ Context Manager: সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ

ফাইল, নেটৱৰ্ক সংযোগ বা আন সম্পদ ব্যৱহাৰ কৰাৰ পিছত সেইবোৰ বন্ধ কৰা প্ৰয়োজন। \`with\` statement-এ কাম শেষ হ'লে—সাধাৰণভাৱে বা exception ঘটিলেও—সম্পদ পৰিষ্কাৰ কৰাৰ ব্যৱস্থা কৰে।

~~~python
with open("অসমীয়া.txt", "w", encoding="utf-8") as ফাইল:
    ফাইল.write("নমস্কাৰ, অসম!")

# with block শেষ হোৱাৰ পিছত ফাইল বন্ধ হয়
~~~

ইয়াত \`encoding="utf-8"\` ব্যৱহাৰ কৰা হৈছে যাতে অসমীয়া আখৰ সঠিকভাৱে লিখিব আৰু পঢ়িব পাৰি। ফাইল খোলাৰ কাম সফল নহ'লে exception হ'ব পাৰে; সেই ক্ষেত্ৰতো আগতে খোলা সম্পদ সঠিকভাৱে বন্ধ কৰাত context manager সহায় কৰে।

## ৬.১৩ নিজে Context Manager তৈয়াৰ কৰা

নিজৰ class-ত context manager সমৰ্থন কৰিবলৈ \`__enter__()\` আৰু \`__exit__()\` পদ্ধতি লিখিব পাৰি।

~~~python
class সৰল_সম্পদ:
    def __enter__(self):
        print("সম্পদ আৰম্ভ হ'ল")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("সম্পদ বন্ধ কৰা হ'ল")
        return False


with সৰল_সম্পদ() as বস্তু:
    print("সম্পদ ব্যৱহাৰ কৰা হৈছে")
~~~

- \`__enter__()\`-এ \`with\` block আৰম্ভ হোৱাৰ সময়ত চলে আৰু \`as\`-ত যি মান দিয়া হয় সেয়া ঘূৰাই দিয়ে।
- \`__exit__()\`-এ block শেষ হ'লে চলে; exception ঘটিলেও ইয়াক কল কৰা হয়।
- \`exc_type\`, \`exc_value\` আৰু \`traceback\`-এ exception-ৰ তথ্য দিয়ে; exception নহ'লে এইবোৰ \`None\` হয়।
- \`__exit__()\`-এ \`True\` ঘূৰাই দিলে exception দমন কৰা হয়। \`False\` বা \`None\` ঘূৰাই দিলে exception সাধাৰণ নিয়মেৰে বাহিৰলৈ যায়।

সাধাৰণতে exception লুকুৱাই নাৰাখিবলৈ \`False\` ঘূৰাই দিয়াই ভাল, যদিহে বিশেষ কাৰণত তাক সামলোৱাৰ উদ্দেশ্য নাথাকে।

## ৬.১৪ Generator-ৰ সহায়ত Context Manager

সৰু context manager লিখিবলৈ \`contextlib.contextmanager\` ব্যৱহাৰ কৰিব পাৰি। Generator-ৰ \`yield\`-ৰ আগৰ অংশটো resource setup আৰু পিছৰ অংশটো cleanup-ৰ কামত ব্যৱহাৰ হয়।

~~~python
from contextlib import contextmanager

@contextmanager
def বাৰ্তা_সম্পদ():
    print("আৰম্ভ")
    try:
        yield "ব্যৱহাৰৰ বাবে মান"
    finally:
        print("শেষ: পৰিষ্কাৰ কৰা হ'ল")


with বাৰ্তা_সম্পদ() as মান:
    print(মান)
~~~

আউটপুট:

~~~text
আৰম্ভ
ব্যৱহাৰৰ বাবে মান
শেষ: পৰিষ্কাৰ কৰা হ'ল
~~~

\`yield\`-ৰ আগত exception ঘটিলে block-ৰ ভিতৰৰ কাম আৰম্ভ নহ'বও পাৰে; \`with\` block-ৰ ভিতৰত exception ঘটিলে সেই exception-টো generator-ৰ \`yield\`-ৰ স্থানত পুনৰ উত্থাপিত হয়। সেয়ে cleanup-ৰ বাবে \`try/finally\` ব্যৱহাৰ কৰা হৈছে।

## ৬.১৫ সাধাৰণ ভুল আৰু সাৱধানতা

1. **Iterable আৰু Iterator একে বুলি ধৰা:** list iterable; \`iter(list)\`-এ iterator দিয়ে।
2. **Generator-ৰ পৰা পুনৰ আৰম্ভ হ'ব বুলি ধৰা:** শেষ হোৱা generator পুনৰ ব্যৱহাৰ কৰিব নোৱাৰি; নতুন generator তৈয়াৰ কৰক।
3. **অসীম generator-ত সীমাহীন লুপ:** \`break\`, \`islice()\` বা অন্য সীমা ব্যৱহাৰ কৰক।
4. **\`yield\` আৰু \`return\` একে বুলি ধৰা:** \`yield\`-এ স্থগিত অৱস্থা ৰাখে; \`return\`-এ function শেষ কৰে।
5. **\`__exit__()\`-এ সদায় exception দমন কৰে বুলি ধৰা:** কেৱল সত্য মান \`True\` ঘূৰালে exception দমন হয়।
6. **ফাইলৰ encoding উপেক্ষা কৰা:** অসমীয়া পাঠৰ বাবে স্পষ্টকৈ \`encoding="utf-8"\` দিয়ক।
7. **Generator-এ সদায় কম মেম'ৰি লয় বুলি ধৰা:** Generator-এ নিজে yield কৰা সকলো মান একেলগে জমা নকৰে, কিন্তু ইয়াৰ ভিতৰত যদি ডাঙৰ list বা cache ৰাখে তেন্তে মেম'ৰি ব্যৱহাৰ হ'ব পাৰে।

## ৬.১৬ অনুশীলনী

**প্ৰশ্ন ১:** Iterable আৰু Iterator-ৰ মাজত দুটা পাৰ্থক্য লিখক।

**প্ৰশ্ন ২:** \`iter([4, 5, 6])\`-ৰ ফলাফল কি ধৰণৰ বস্তু?

**প্ৰশ্ন ৩:** \`next()\`-এ iterator-ৰ সকলো মান শেষ হোৱাৰ পিছত কোনটো exception তোলে?

**প্ৰশ্ন ৪:** তলৰ Generator-টোৰ পৰা প্ৰথম তিনিটা মান কি পাব?

~~~python
def সংখ্যা():
    for x in range(2, 10, 2):
        yield x
~~~

**প্ৰশ্ন ৫:** Generator Function-ত \`yield\`-ৰ কাম কি?

**প্ৰশ্ন ৬:** List Comprehension আৰু Generator Expression-ৰ মাজত পাৰ্থক্য লিখক।

**প্ৰশ্ন ৭:** \`yield from [7, 8, 9]\`-এ কি কৰে?

**প্ৰশ্ন ৮:** \`with open(...)\` ব্যৱহাৰ কৰাৰ এটা সুবিধা লিখক।

**প্ৰশ্ন ৯:** Context Manager-ৰ \`__enter__()\` আৰু \`__exit__()\`-ৰ কাম কি?

**প্ৰশ্ন ১০:** \`__exit__()\`-এ \`True\` ঘূৰাই দিলে কি হয়?

**প্ৰশ্ন ১১:** ১ৰ পৰা ১০লৈ যুগ্ম সংখ্যা yield কৰা এটা Generator লিখক।

**প্ৰশ্ন ১২:** Fibonacci Generator-ৰ পৰা প্ৰথম ৮টা মান ছপা কৰা প্ৰগ্ৰাম লিখক।

## ৬.১৭ উত্তৰ আৰু ইংগিত

1. Iterable-ৰ পৰা iterator পোৱা যায়; Iterator-এ \`next()\`-এৰে পৰৱৰ্তী মান দিয়ে আৰু শেষত \`StopIteration\` তোলে।
2. এটা Iterator object।
3. \`StopIteration\`।
4. 2, 4, 6।
5. এটা মান দিয়ে আৰু function-ৰ অৱস্থা স্থগিত ৰাখে।
6. List Comprehension-এ list তৈয়াৰ কৰে; Generator Expression-এ প্ৰয়োজন অনুসৰি মান দিয়ে।
7. Iterable-ৰ প্ৰতিটো মান এটাকৈ yield কৰে।
8. Block শেষ হ'লে ফাইল বন্ধ কৰাত সহায় কৰে, exception ঘটিলেও।
9. \`__enter__()\`-এ resource আৰম্ভ কৰি মান দিয়ে; \`__exit__()\`-এ block শেষ হ'লে cleanup কৰে।
10. Block-ৰ exception দমন হয়।
11. এটা সম্ভৱ উত্তৰ:

~~~python
def যুগ্ম_সংখ্যা():
    for x in range(2, 11, 2):
        yield x

for x in যুগ্ম_সংখ্যা():
    print(x)
~~~

12. এটা সম্ভৱ উত্তৰ:

~~~python
def fibonacci():
    a, b = 0, 1
    for _ in range(8):
        yield a
        a, b = b, a + b

print(list(fibonacci()))
~~~

## ৬.১৮ সাৰাংশ

এই অধ্যায়ত Python-ৰ Iterator Protocol, Iterable আৰু Iterator-ৰ পাৰ্থক্য, নিজৰ Iterator Class, Generator Function, \`yield\`, Generator Expression, \`yield from\`, Lazy Evaluation আৰু Context Manager শিকিলোঁ। ডাঙৰ বা ক্ৰমাগত তথ্যৰ সৈতে কাম কৰোঁতে Generator উপযোগী; আৰু ফাইলৰ দৰে সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ কৰিবলৈ Context Manager অতি গুৰুত্বপূৰ্ণ।

## ৬.১৯ অধিক অধ্যয়নৰ বাবে নিৰ্ভৰযোগ্য উৎস

- Python Documentation — Iterator Types: https://docs.python.org/3/library/stdtypes.html#iterator-types
- Python Documentation — Functional Programming HOWTO: https://docs.python.org/3/howto/functional.html
- Python Documentation — Expressions (Yield): https://docs.python.org/3/reference/expressions.html#yield-expressions
- Python Documentation — Generator Expressions: https://docs.python.org/3/reference/expressions.html#generator-expressions
- Python Documentation — The \`with\` statement: https://docs.python.org/3/reference/compound_stmts.html#the-with-statement
- Python Documentation — contextlib: https://docs.python.org/3/library/contextlib.html
`,
    },
    {
      id: 'ch-7',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৭: ফাংচন, স্কোপ (LEGB), ক্ল’জাৰ আৰু ডেকৰেটৰ',
      subtitle: 'LEGB Scope Rule, Closures আৰু Practical Decorators',
      estimatedReadTime: '8 min',
      topics: ['LEGB Rule', 'Closures', 'Decorators', 'Performance Profiler Decorator'],
      content: `## ৭.১ LEGB নিয়ম (Scope Resolution)

পাইথনে চলক বিচাৰি পাবলৈ এই ক্ৰম অনুসৰণ কৰে:
**Local -> Enclosing -> Global -> Built-in**

\`\`\`python
x = "গ্ল'বেল"  # Global

def বাহ্যিক():
    x = "এনক্ল'জিং"  # Enclosing
    def ভিতৰৰ():
        x = "লোকেল"  # Local
        print(x)
    ভিতৰৰ()

বাহ্যিক()  # আউটপুট: লোকেল
\`\`\`

---

## ৭.২ ক্ল'জাৰ (Closure)

\`\`\`python
def গুণক_তৈয়াৰ_কৰা(গুণনীয়ক):
    def গুণক(সংখ্যা):
        return সংখ্যা * গুণনীয়ক
    return গুণক

দ্বিগুণ = গুণক_তৈয়াৰ_কৰা(2)
ত্ৰিগুণ = গুণক_তৈয়াৰ_কৰা(3)

print(দ্বিগুণ(5))  # ১০
print(ত্ৰিগুণ(5))  # ১৫
\`\`\`

---

## ৭.৩ ডেকৰেটৰ (Decorators)

\`\`\`python
import time
from functools import wraps

def সময়_গণনা_ডেকৰেটৰ(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        আৰম্ভণি = time.perf_counter()
        ফলাফল = func(*args, **kwargs)
        শেষ = time.perf_counter()
        print(f"'{func.__name__}' সমাপ্ত হ'বলৈ সময় লাগিল: {শেষ - আৰম্ভণি:.6f}s")
        return ফলাফল
    return wrapper

@সময়_গণনা_ডেকৰেটৰ
def গাণিতিক_হিচাপ(n: int):
    return sum(i * i for i in range(n))

গাণিতিক_হিচাপ(1_000_000)
\`\`\``,
    },
    {
      id: 'ch-8',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৮: লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ',
      subtitle: 'Dynamic Array, Stack (LIFO), Queue (FIFO) আৰু Linked List',
      estimatedReadTime: '11 min',
      topics: ['Dynamic Array', 'Stack & Valid Parentheses', 'Queue (deque)', 'Singly Linked List'],
      content: `## ৮.১ তালিকা (Dynamic Array Implementation)

\`\`\`python
class ডাইনামিক_এৰে:
    def __init__(self):
        self.ধাৰক = [None] * 2
        self.গণনা = 0
        self.ক্ষমতা = 2
        
    def যোগ(self, মান):
        if self.গণনা == self.ক্ষমতা:
            self._বৃদ্ধি()
        self.ধাৰক[self.গণনা] = মান
        self.গণনা += 1
        
    def _বৃদ্ধি(self):
        নতুন_ধাৰক = [None] * (self.ক্ষমতা * 2)
        for i in range(self.গণনা):
            নতুন_ধাৰক[i] = self.ধাৰক[i]
        self.ধাৰক = নতুন_ধাৰক
        self.ক্ষমতা *= 2
        
    def __getitem__(self, সূচী):
        if not 0 <= সূচী < self.গণনা:
            raise IndexError("সূচী বাহিৰত!")
        return self.ধাৰক[সূচী]
        
    def __len__(self):
        return self.গণনা

# ব্যৱহাৰ
arr = ডাইনামিক_এৰে()
for i in range(5):
    arr.যোগ(i * 10)
print([arr[i] for i in range(len(arr))])  # [0, 10, 20, 30, 40]
\`\`\`

---

## ৮.২ ষ্টেক (Stack) - LIFO

\`\`\`python
class ষ্টেক:
    def __init__(self):
        self.তালিকা = []
    def ঠিলা(self, মান):
        self.তালিকা.append(মান)
    def উলিওৱা(self):
        if self.খালী():
            raise IndexError("ষ্টেক খালী!")
        return self.তালিকা.pop()
    def শীৰ্ষ(self):
        return self.তালিকা[-1] if not self.খালী() else None
    def খালী(self):
        return len(self.তালিকা) == 0

# সমস্যা সমাধান: বন্ধনী মিলোৱা (Valid Parentheses)
def বন্ধনী_মিল_কিনা(বাক্য: str) -> bool:
    জোড়া = {')': '(', '}': '{', ']': '['}
    স্তূপ = ষ্টেক()
    for অক্ষৰ in বাক্য:
        if অক্ষৰ in "({[":
            স্তূপ.ঠিলা(অক্ষৰ)
        elif অক্ষৰ in ")}]":
            if স্তূপ.খালী() or স্তূপ.উলিওৱা() != জোড়া[অক্ষৰ]:
                return False
    return স্তূপ.খালী()

print(বন্ধনী_মিল_কিনা("({[]})"))  # True
print(বন্ধনী_মিল_কিনা("({[})"))   # False
\`\`\`

---

## ৮.৩ কিউ (Queue) - FIFO

\`\`\`python
from collections import deque

class কিউ:
    def __init__(self):
        self.ধাৰক = deque()
    def যোগ(self, মান):
        self.ধাৰক.append(মান)
    def আঁতৰাও(self):
        if self.খালী():
            raise IndexError("কিউ খালী!")
        return self.ধাৰক.popleft()
    def খালী(self):
        return len(self.ধাৰক) == 0
\`\`\`

---

## ৮.৪ লিংকড লিষ্ট (Linked List)

\`\`\`python
class নোড:
    def __init__(self, মান):
        self.মান = মান
        self.পৰৱৰ্তী = None

class লিংকড_লিষ্ট:
    def __init__(self):
        self.মুৰব্বী = None
        self.আকাৰ = 0
        
    def যোগ_কৰা(self, মান):
        নতুন = নোড(মান)
        নতুন.পৰৱৰ্তী = self.মুৰব্বী
        self.মুৰব্বী = নতুন
        self.আকাৰ += 1
        
    def দেখুওৱা(self):
        বৰ্তমান = self.মুৰব্বী
        মানসমূহ = []
        while বৰ্তমান:
            মানসমূহ.append(str(বৰ্তমান.মান))
            বৰ্তমান = বৰ্তমান.পৰৱৰ্তী
        print(" -> ".join(মানসমূহ) + " -> None")

ll = লিংকড_লিষ্ট()
ll.যোগ_কৰা(30)
ll.যোগ_কৰা(20)
ll.যোগ_কৰা(10)
ll.দেখুওৱা()  # 10 -> 20 -> 30 -> None
\`\`\``,
    },
    {
      id: 'ch-9',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৯: নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ (BST & Graphs)',
      subtitle: 'Binary Search Tree, In-order Traversal, BFS & DFS Graph Algorithms',
      estimatedReadTime: '10 min',
      topics: ['Binary Search Tree', 'Tree Traversal', 'Graph BFS', 'Graph DFS'],
      content: `## ৯.১ বাইনাৰী চাৰ্চ ট্ৰি (BST)

\`\`\`python
class ট্ৰি_নোড:
    def __init__(self, মান):
        self.মান = মান
        self.বাওঁ = None
        self.সোঁ = None

class BST:
    def __init__(self):
        self.মূল = None
        
    def যোগ(self, মান):
        if not self.মূল:
            self.মূল = ট্ৰি_নোড(মান)
        else:
            self._যোগ_সহায়(self.মূল, মান)
            
    def _যোগ_সহায়(self, নোড, মান):
        if মান < নোড.মান:
            if নোড.বাওঁ is None:
                নোড.বাওঁ = ট্ৰি_নোড(মান)
            else:
                self._যোগ_সহায়(নোড.বাওঁ, মান)
        else:
            if নোড.সোঁ is None:
                নোড.সোঁ = ট্ৰি_নোড(মান)
            else:
                self._যোগ_সহায়(নোড.সোঁ, মান)
                
    def ইনঅৰ্ডাৰ(self, নোড=None, ফল=None):
        if ফল is None:
            ফল = []
            নোড = self.মূল
        if নোড:
            self.ইনঅৰ্ডাৰ(নোড.বাওঁ, ফল)
            ফল.append(নোড.মান)
            self.ইনঅৰ্ডাৰ(নোড.সোঁ, ফল)
        return ফল

bst = BST()
for x in [50, 30, 70, 20, 40, 60, 80]:
    bst.যোগ(x)
print("ইনঅৰ্ডাৰ (ক্ৰমান্বয়):", bst.ইনঅৰ্ডাৰ())  # [20, 30, 40, 50, 60, 70, 80]
\`\`\`

---

## ৯.২ গ্ৰাফ আৰু BFS / DFS

\`\`\`python
from collections import deque

def গ্ৰাফ_BFS(গ্ৰাফ, আৰম্ভণি):
    ভ্ৰমণ = set([আৰম্ভণি])
    কিউ = deque([আৰম্ভণি])
    ক্ৰম = []
    while কিউ:
        নোড = কিউ.popleft()
        ক্ৰম.append(নোড)
        for চুবুৰীয়া in গ্ৰাফ.get(নোড, []):
            if চুবুৰীয়া not in ভ্ৰমণ:
                ভ্ৰমণ.add(চুবুৰীয়া)
                কিউ.append(চুবুৰীয়া)
    return ক্ৰম

def গ্ৰাফ_DFS(গ্ৰাফ, আৰম্ভণি, ভ্ৰমণ=None):
    if ভ্ৰমণ is None:
        ভ্ৰমণ = set()
    ভ্ৰমণ.add(আৰম্ভণি)
    ক্ৰম = [আৰম্ভণি]
    for চুবুৰীয়া in গ্ৰাফ.get(আৰম্ভণি, []):
        if চুবুৰীয়া not in ভ্ৰমণ:
            ক্ৰম.extend(গ্ৰাফ_DFS(গ্ৰাফ, চুবুৰীয়া, ভ্ৰমণ))
    return ক্ৰম

গ্ৰাফ = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

print("BFS ক্ৰম:", গ্ৰাফ_BFS(গ্ৰাফ, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']
print("DFS ক্ৰম:", গ্ৰাফ_DFS(গ্ৰাফ, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']
\`\`\``,
    },
    {
      id: 'ch-10',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ১০: টাইম-স্পেচ কমপেক্সিটি আৰু ছৰ্টিং এলগৰিদম',
      subtitle: 'Big-O Notation, Merge Sort (O(n log n)) আৰু Quick Sort',
      estimatedReadTime: '9 min',
      topics: ['Big-O Cheat Sheet', 'Merge Sort', 'Quick Sort', 'Binary Search'],
      content: `## ১০.১ Big-O নোটেশন

| নোটেশন | নাম | বাস্তৱ উদাহৰণ |
| :--- | :--- | :--- |
| **O(1)** | কনষ্টেণ্ট | এৰেত ইনডেক্সিং, Hash Map Lookup |
| **O(log n)** | লগাৰিদমিক | বাইনাৰী চাৰ্চ |
| **O(n)** | লিনিয়াৰ | লিনিয়াৰ চাৰ্চ, সাধাৰণ ফৰ-লুপ |
| **O(n log n)** | লিন-লগ | মাৰ্জ ছৰ্ট, হিপ ছৰ্ট |
| **O(n²)** | কোৱাড্ৰেটিক | বাবল ছৰ্ট, নেষ্টেড লুপ |
| **O(2ⁿ)** | এক্সপোনেন্সিয়েল | ৰিকাৰচিভ ফিবোনাচি |
| **O(n!)** | ফেক্টৰিয়েল | ট্ৰাভেলিং চেলছমেন সমস্যা |

---

## ১০.২ মাৰ্জ ছৰ্ট (Merge Sort - O(n log n))

\`\`\`python
def মাৰ্জ_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা
    মধ্য = len(তালিকা) // 2
    বাওঁ = মাৰ্জ_ছৰ্ট(তালিকা[:মধ্য])
    সোঁ = মাৰ্জ_ছৰ্ট(তালিকা[মধ্য:])
    return মাৰ্জ(বাওঁ, সোঁ)

def মাৰ্জ(বা, সো):
    ফল = []
    i = j = 0
    while i < len(বা) and j < len(সো):
        if বা[i] <= সো[j]:
            ফল.append(বা[i])
            i += 1
        else:
            ফল.append(সো[j])
            j += 1
    ফল.extend(বা[i:])
    ফল.extend(সো[j:])
    return ফল

print("মাৰ্জ ছৰ্ট:", মাৰ্জ_ছৰ্ট([38, 27, 43, 3, 9, 82, 10, 55, 19]))
\`\`\`

---

## ১০.৩ কুইক ছৰ্ট (Quick Sort)

\`\`\`python
import random

def কুইক_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা
    পিভট = random.choice(তালিকা)
    কম = [x for x in তালিকা if x < পিভট]
    সমান = [x for x in তালিকা if x == পিভট]
    বেছি = [x for x in তালিকা if x > পিভট]
    return কুইক_ছৰ্ট(কম) + সমান + কুইক_ছৰ্ট(বেছি)

print("কুইক ছৰ্ট:", কুইক_ছৰ্ট([64, 34, 25, 12, 22, 11, 90]))
\`\`\``,
    },
    {
      id: 'ch-11',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১১: OOP-ৰ স্তম্ভ আৰু ডেটা মডেলিং',
      subtitle: 'Abstract Base Classes, Encapsulation, Properties & Banking Architecture',
      estimatedReadTime: '9 min',
      topics: ['Encapsulation & Private Members', 'ABC & Abstract Methods', 'Inheritance', 'Polymorphism'],
      content: `## ১১.১ এবষ্ট্ৰাক্ট ক্লাছ আৰু ইনহেৰিটেঞ্চ

\`\`\`python
from abc import ABC, abstractmethod
from datetime import datetime

class একাউণ্ট(ABC):
    """বেংক একাউণ্টৰ এবষ্ট্ৰাক্ট বেচ ক্লাছ"""
    def __init__(self, নাম: str, ধন: float, একাউণ্ট_নম্বৰ: str):
        self.নাম = নাম
        self._বেলেঞ্চ = ধন                # প্ৰটেক্টেড
        self.__একাউণ্ট_নম্বৰ = একাউণ্ট_নম্বৰ  # প্ৰাইভেট
        self._ট্ৰাঞ্জেকচন = []
        
    @property
    def বেলেঞ্চ(self) -> float:
        return self._বেলেঞ্চ
        
    @বেলেঞ্চ.setter
    def বেলেঞ্চ(self, মান: float):
        if মান < 0:
            raise ValueError("বেলেঞ্চ ঋণাত্মক হ'ব নোৱাৰে!")
        self._বেলেঞ্চ = মান
        
    def জমা(self, পৰিমাণ: float):
        if পৰিমাণ <= 0:
            raise ValueError("জমাৰ পৰিমাণ ধনাত্মক হ'ব লাগে!")
        self._বেলেঞ্চ += পৰিমাণ
        self._ট্ৰাঞ্জেকচন.append((datetime.now(), "জমা", পৰিমাণ))
        
    def উলিওৱা(self, পৰিমাণ: float):
        if পৰিমাণ > self._বেলেঞ্চ:
            raise ValueError("অপৰ্যাপ্ত বেলেঞ্চ!")
        self._বেলেঞ্চ -= পৰিমাণ
        self._ট্ৰাঞ্জেকচন.append((datetime.now(), "উলিওৱা", -পৰিমাণ))
        
    @abstractmethod
    def সুত_গণনা(self) -> float:
        """প্ৰতিটো একাউণ্টৰ নিজা সুতৰ হাৰ"""
        pass

class সঞ্চয়(একাউণ্ট):
    def __init__(self, নাম, ধন, একাউণ্ট_নম্বৰ):
        super().__init__(নাম, ধন, একাউণ্ট_নম্বৰ)
        self.সুত_হাৰ = 0.05
        
    def সুত_গণনা(self) -> float:
        return self._বেলেঞ্চ * self.সুত_হাৰ

# ব্যৱহাৰ
acc = সঞ্চয়("ৰিকু", 50000.0, "SB-001")
acc.জমা(15000)
print(f"গ্ৰাহক: {acc.নাম}, বৰ্তমান বেলেঞ্চ: ₹{acc.বেলেঞ্চ:,.2f}")
print(f"বাৰ্ষিক সুত: ₹{acc.সুত_গণনা():,.2f}")
\`\`\``,
    },
    {
      id: 'ch-12',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১২: SOLID নীতি আৰু ডিজাইন পেটাৰ্ণ',
      subtitle: 'Single Responsibility, Open-Closed, Liskov, Strategy & Factory Pattern',
      estimatedReadTime: '10 min',
      topics: ['SOLID Principles', 'Strategy Pattern (Payments)', 'Factory Pattern (Databases)'],
      content: `## ১২.১ SOLID নীতিসমূহ

- **S (Single Responsibility Principle):** প্ৰতিটো ক্লাছৰ এটাই মাত্ৰ দায়িত্ব থাকিব লাগে।
- **O (Open/Closed Principle):** এক্সটেন্ডৰ বাবে খোলা, কিন্তু মূল কোড সলনিৰ বাবে বন্ধ।
- **L (Liskov Substitution Principle):** চাইল্ড ক্লাছে পেৰেণ্ট ক্লাছৰ ঠাই সম্পূৰ্ণভাৱে ল'ব পাৰিব লাগে।
- **I (Interface Segregation Principle):** ডাঙৰ ইণ্টাৰফেচক সৰু সৰু নিৰ্দিষ্ট ভাগত ভগাব লাগে।
- **D (Dependency Inversion Principle):** এবষ্ট্ৰাকচনৰ ওপৰত নিৰ্ভৰ কৰিব লাগে, কংক্ৰিট ক্লাছৰ ওপৰত নহয়।

---

## ১২.২ ষ্ট্ৰেটেজি পেটাৰ্ণ (Strategy Pattern - Payment Processing)

\`\`\`python
from abc import ABC, abstractmethod
from typing import List

class পেমেণ্ট_পদ্ধতি(ABC):
    @abstractmethod
    def পে(self, পৰিমাণ: float):
        pass
    @abstractmethod
    def পৰিশোধ_যোগ্য(self) -> bool:
        pass

class UPI(পেমেণ্ট_পদ্ধতি):
    def __init__(self, upi_id: str):
        self.upi_id = upi_id
    def পে(self, পৰিমাণ: float):
        print(f"UPI ({self.upi_id}) যোগে ₹{পৰিমাণ:.2f} পৰিশোধ হ'ল।")
    def পৰিশোধ_যোগ্য(self) -> bool:
        return "@" in self.upi_id

class কাৰ্ট:
    def __init__(self):
        self.সামগ্ৰী: List[dict] = []
        self.পদ্ধতি: পেমেণ্ট_পদ্ধতি = None
    def যোগ(self, নাম: str, দাম: float):
        self.সামগ্ৰী.append({"নাম": নাম, "দাম": দাম})
    def মুঠ_দাম(self) -> float:
        return sum(x["দাম"] for x in self.সামগ্ৰী)
    def পেমেণ্ট_ছেট(self, পদ্ধতি: পেমেণ্ট_পদ্ধতি):
        if not পদ্ধতি.পৰিশোধ_যোগ্য():
            raise ValueError("অবৈধ পেমেণ্ট পদ্ধতি!")
        self.পদ্ধতি = পদ্ধতি
    def চেকআউট(self):
        if not self.পদ্ধতি:
            raise ValueError("পেমেণ্ট পদ্ধতি ছেট কৰা নাই!")
        self.পদ্ধতি.পে(self.মুঠ_দাম())
        print("অৰ্ডাৰ সফল!")

# ব্যৱহাৰ
ক = কাৰ্ট()
ক.যোগ("লেপটপ", 75000)
ক.যোগ("মাউচ", 899)
ক.পেমেণ্ট_ছেট(UPI("riku@upi"))
ক.চেকআউট()
\`\`\`

---

## ১২.৩ ফেক্টৰি পেটাৰ্ণ (Factory Pattern)

\`\`\`python
class ডাটাবেছ_ফেক্টৰি:
    @staticmethod
    def তৈয়াৰ(টাইপ: str):
        if টাইপ == "sql":
            return "PostgreSQL Engine Initialized"
        elif টাইপ == "nosql":
            return "MongoDB Cluster Connected"
        raise ValueError(f"অজ্ঞাত ডাটাবেছ টাইপ: {টাইপ}")
\`\`\``,
    },
    {
      id: 'ch-14',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৪: কনকাৰেঞ্চি (AsyncIO & Non-blocking I/O)',
      subtitle: 'Async/Await, asyncio.gather, aiohttp & Concurrent HTTP Requests',
      estimatedReadTime: '9 min',
      topics: ['Event Loop & Coroutines', 'asyncio.gather', 'Async HTTP Client with aiohttp', 'Throughput Benchmarking'],
      content: `## ১৪.১ AsyncIO-ৰ মৌলিক ধাৰণা

\`\`\`python
import asyncio
import time

async def ফেচ_ডেটা(আইডি: int, পলম: float):
    """নকল API কল"""
    print(f"অনুৰোধ {আইডি} আৰম্ভ...")
    await asyncio.sleep(পলম)  # নন-ব্লকিং I/O
    print(f"অনুৰোধ {আইডি} সম্পূৰ্ণ!")
    return {"id": আইডি, "status": 200, "data": f"ফলাফল-{আইডি}"}

async def মুখ্য():
    আৰম্ভ = time.time()
    # সমান্তৰালভাৱে একাধিক অনুৰোধ এক্সিকিউট কৰা
    ফলাফল = await asyncio.gather(
        ফেচ_ডেটা(1, 1.0),
        ফেচ_ডেটা(2, 0.5),
        ফেচ_ডেটা(3, 1.5),
        ফেচ_ডেটা(4, 0.2)
    )
    print(f"\\nমুঠ সময়: {time.time() - আৰম্ভ:.2f}s")
    print("ফলাফলসমূহ:", ফলাফল)

# asyncio.run(মুখ্য())
\`\`\`

---

## ১৪.২ Async HTTP Client (aiohttp)

\`\`\`python
import aiohttp
import asyncio

async def বাস্তৱ_API_কল():
    async with aiohttp.ClientSession() as session:
        urls = [
            "https://api.github.com/users/python",
            "https://api.github.com/users/google",
            "https://api.github.com/users/microsoft"
        ]
        tasks = [session.get(url) for url in urls]
        responses = await asyncio.gather(*tasks)
        for resp in responses:
            data = await resp.json()
            print(f"{data.get('login')}: {data.get('public_repos')} public repos")

# asyncio.run(বাস্তৱ_API_কল())
\`\`\``,
    },
    {
      id: 'ch-16',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৬: লগিResource, এক্সেপচন আৰ্কিটেকচাৰ আৰু মনিটৰিং',
      subtitle: 'Production Logging, Rotating File Handler, Custom Exception Hierarchy',
      estimatedReadTime: '8 min',
      topics: ['RotatingFileHandler', 'Structured Logging', 'Custom Exception Hierarchy', 'Try-Except-Else-Finally'],
      content: `## ১৬.১ প্ৰফেচনেল লগিঙৰ ব্যৱস্থা

\`\`\`python
import logging
import sys
from logging.handlers import RotatingFileHandler

# লগাৰ কনফিগাৰেচন
logger = logging.getLogger("CodeYatra")
logger.setLevel(logging.DEBUG)

# কন্স'ল হেণ্ডলাৰ
console = logging.StreamHandler(sys.stdout)
console.setLevel(logging.INFO)
console_fmt = logging.Formatter("%(asctime)s [%(levelname)s] %(name)s - %(message)s")
console.setFormatter(console_fmt)

# ফাইল হেণ্ডলাৰ (ৰোটেটিং ১MB ফাইল, ৫টা বেকআপ)
file_handler = RotatingFileHandler("app.log", maxBytes=1024*1024, backupCount=5)
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(console_fmt)

logger.addHandler(console)
logger.addHandler(file_handler)

logger.info("চিষ্টেম সুচাৰুৰূপে আৰম্ভ হ'ল।")
logger.warning("মেম'ৰি ৮০% ব্যৱহৃত!")
\`\`\`

---

## ১৬.২ কাষ্টম এক্সেপচন হায়াৰাৰ্কি

\`\`\`python
class CodeYatraError(Exception):
    """বেচ এক্সেপচন"""
    pass

class ভেলিডেশনError(CodeYatraError):
    def __init__(self, ক্ষেত্ৰ: str, বাৰ্তা: str):
        self.ক্ষেত্ৰ = ক্ষেত্ৰ
        self.বাৰ্তা = বাৰ্তা
        super().__init__(f"[{ক্ষেত্ৰ}] {বাৰ্তা}")

def ব্যৱহাৰকাৰী_সৃষ্টি(তথ্য: dict):
    if "ইমেইল" not in তথ্য:
        raise ভেলিডেশনError("ইমেইল", "ইমেইল বাধ্যতামূলক!")
    if তথ্য.get("বয়স", 0) < 18:
        raise ভেলিডেশনError("বয়স", "বয়স ১৮ বছৰৰ কম হ'ব নোৱাৰে!")
    return {"status": "created"}

try:
    ব্যৱহাৰকাৰী_সৃষ্টি({"নাম": "ৰিকু", "বয়স": 16})
except ভেলিডেশনError as e:
    print(f"ভেলিডেশন ত্ৰুটি: {e}")
\`\`\``,
    },
    {
      id: 'ch-17',
      volume: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      title: 'অধ্যায় ১৭: ৰিলেশ্যনেল ডাটাবেছ, SQL আৰু ACID ধৰ্ম',
      subtitle: 'SQLite In-depth, Parameterized Queries, Indexing & ACID Transactions',
      estimatedReadTime: '9 min',
      topics: ['SQLite3 Context Management', 'SQL Joins', 'Database Normalization', 'ACID Properties'],
      content: `## ১৭.১ SQLite ত মৌলিক পৰিচালনা

\`\`\`python
import sqlite3
from contextlib import closing

def ডাটাবেছ_পৰিচালনা():
    with closing(sqlite3.connect("ব্যৱহাৰকাৰী.db")) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # টেবুল সৃষ্টি
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER CHECK(age >= 0),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        
        # ইনডেক্স সৃষ্টি
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_email ON users(email)")
        
        # পেৰামিটাৰাইজড ইনচাৰ্ট
        users = [
            ("ৰিকু", "riku@mail.com", 25),
            ("জয়ন্ত", "jay@mail.com", 30),
            ("প্ৰিয়া", "priya@mail.com", 22)
        ]
        cursor.executemany(
            "INSERT OR IGNORE INTO users (name, email, age) VALUES (?, ?, ?)",
            users
        )
        conn.commit()
        
        # কুৱেৰি
        cursor.execute("SELECT * FROM users WHERE age > ?", (20,))
        for row in cursor.fetchall():
            print(f"{row['name']} | {row['email']} | {row['age']} বছৰ")
\`\`\`

---

## ১৭.২ ACID ধৰ্ম

| ধৰ্ম | ব্যাখ্যা |
| :--- | :--- |
| **Atomicity** | সম্পূৰ্ণ ট্ৰাঞ্জেকচন সফল হ'ব লাগিব বা একোৱেই নহ'ব (All or Nothing) |
| **Consistency** | ট্ৰাঞ্জেকচনৰ পূৰ্বে আৰু পিছত ডাটাবেছ সকলো নিয়ম আৰু কনষ্ট্ৰেইণ্ট মানি থাকিব |
| **Isolation** | সমান্তৰালভাৱে চলা ট্ৰাঞ্জেকচনসমূহে ইটোৱে সিটোক বিপথগামী নকৰে |
| **Durability** | এবাৰ কমিট হোৱা ডেটা বিদ্যুৎ বিচ্ছিন্ন হ'লেও চিৰস্থায়ী হৈ থাকিব |`,
    },
    {
      id: 'ch-19',
      volume: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      title: 'অধ্যায় ১৯: প্ৰডাকচন-ৰেডি RESTful API (FastAPI & Pydantic V2)',
      subtitle: 'Lifespan Events, Pydantic V2 Models, Dependency Injection & JWT Security',
      estimatedReadTime: '11 min',
      topics: ['FastAPI 2026 Lifespan', 'Pydantic V2 Validation', 'Dependency Injection (Depends)', 'JWT Authentication'],
      content: `## ১৯.১ FastAPI এপ্লিকেচন (২০২৬ সংস্কৰণ)

\`\`\`python
from fastapi import FastAPI, HTTPException, status, Depends, BackgroundTasks
from pydantic import BaseModel, EmailStr, Field, ConfigDict, field_validator
from typing import List, Optional, Annotated
from datetime import datetime
import uuid
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("চাৰ্ভাৰ আৰম্ভ হ'ল!")
    yield
    print("চাৰ্ভাৰ বন্ধ হ'ল!")

app = FastAPI(
    title="অসমীয়া API ২০২৬",
    description="প্ৰডাকচন-ৰেডি এণ্টাৰপ্ৰাইজ ব্যৱহাৰকাৰী ব্যৱস্থাপনা API",
    version="2.0.0",
    lifespan=lifespan
)

db = {}

# Pydantic V2 মডেল
class UserBase(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    full_name: Optional[str] = None
    age: Optional[int] = Field(None, ge=0, le=150)

class UserIn(UserBase):
    password: str = Field(..., min_length=8)

class UserOut(UserBase):
    id: str
    created_at: datetime
    is_active: bool = True

@app.post("/users", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserIn):
    if any(u["email"] == user.email for u in db.values()):
        raise HTTPException(status_code=400, detail="এই ইমেইলৰে ইতিমধ্যে পঞ্জীয়ন আছে!")
    
    user_id = str(uuid.uuid4())
    user_data = user.model_dump()
    user_data["id"] = user_id
    user_data["created_at"] = datetime.now()
    user_data["is_active"] = True
    db[user_id] = user_data
    return user_data

@app.get("/users", response_model=List[UserOut])
async def list_users():
    return list(db.values())
\`\`\`

---

## ১৯.২ API চিকিউৰিটি (JWT & OAuth2)

\`\`\`python
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext

SECRET_KEY = "আপোনাৰ-অতি-গোপন-ছিক্ৰেট-কি"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def টোকেন_সৃষ্টি(ডাটা: dict):
    return jwt.encode(ডাটা, SECRET_KEY, algorithm=ALGORITHM)
\`\`\``,
    },
    {
      id: 'ch-20',
      volume: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      title: 'অধ্যায় ২০: আধুনিক JavaScript (ES6+) আৰু React ১৯',
      subtitle: 'Modern ES2025 Features, React 19 Hooks, Server Components & Custom Hooks',
      estimatedReadTime: '10 min',
      topics: ['Modern JavaScript Features', 'React 19 Custom Hooks', 'React Server Components', 'State Optimization'],
      content: `## ২০.১ আধুনিক জাভাস্ক্রিপ্ট (ES6+ / ES2025)

\`\`\`javascript
// ১. Destructuring
const ব্যৱহাৰকাৰী = { নাম: "ৰিকু", বয়স: 25, ঠিকনা: { চহৰ: "গুৱাহাটী" } };
const { নাম, বয়স, ঠিকনা: { চহৰ } } = ব্যৱহাৰকাৰী;

// ২. Spread & Rest
const সংখ্যা = [1, 2, 3];
const নতুন = [...সংখ্যা, 4, 5];

// ৩. Async/Await with Error Handling
async function ডেটা_আনা(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("নেটৱৰ্ক ত্ৰুটি!");
    return await res.json();
  } catch (err) {
    console.error("ত্ৰুটি:", err.message);
    return null;
  }
}

// ৪. Optional Chaining & Nullish Coalescing
const চহৰ_নাম = ব্যৱহাৰকাৰী?.ঠিকনা?.চহৰ;
const মান = null ?? "ডিফল্ট মান";
\`\`\`

---

## ২০.২ React ১৯ কম্পোনেন্ট & Custom Hook

\`\`\`jsx
import React, { useState, useEffect } from 'react';

// Custom API Hook
export function useAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

export function UserDashboard() {
  const [filter, setFilter] = useState('');
  const { data, loading, error } = useAPI('/api/v1/users');

  if (loading) return <div>লোড হৈ আছে...</div>;
  if (error) return <div>ত্ৰুটি: {error}</div>;

  return (
    <div className="dashboard">
      <h1>ব্যৱহাৰকাৰী ডেশ্ববৰ্ড</h1>
      <input 
        placeholder="সন্ধান কৰক..." 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
      />
      <ul>
        {data.filter(u => u.name?.toLowerCase().includes(filter.toLowerCase())).map(u => (
          <li key={u.id}><strong>{u.name}</strong> — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
    },
    {
      id: 'ch-21',
      volume: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      title: 'অধ্যায় ২১: ফুলষ্টেক ইন্টিগ্ৰেচন — React + FastAPI',
      subtitle: 'CORS Config, Centralized API Client, Token Auth & Form Handling',
      estimatedReadTime: '9 min',
      topics: ['CORS Middleware', 'Singleton API Client', 'Interactive User Form', 'Error Boundary'],
      content: `## ২১.১ CORS আৰু API ক্লায়েণ্ট

\`\`\`python
# FastAPI main.py ত CORS ছেটআপ
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`

\`\`\`javascript
// Centralized API Client (api.js)
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class APIClient {
  async request(endpoint, options = {}) {
    const url = \`\${API_BASE}\${endpoint}\`;
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
      ...options.headers,
    };
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || \`HTTP \${response.status}\`);
    }
    return response.json();
  }

  get(endpoint) { return this.request(endpoint); }
  post(endpoint, body) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) }); }
}

export const api = new APIClient();
\`\`\``,
    },
    {
      id: 'ch-22',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২২: গিট আৰু CI/CD পাইপলাইন',
      subtitle: 'Git Workflow, Conventional Commits, GitHub Actions & VPS Automated Deployment',
      estimatedReadTime: '9 min',
      topics: ['Git Flow & Rebase', 'Conventional Commits', 'GitHub Actions Pipeline', 'Automated VPS Deployment'],
      content: `## ২২.১ গিট এছেন্সিয়েল ফ্ল’ (Git Essential Flow ২০২৬)

\`\`\`bash
# নতুন ব্ৰাঞ্চ সৃষ্টি
git checkout -b feature/jwt-auth

# Conventional Commits:
git add .
git commit -m "feat(auth): implement token verification"
git commit -m "fix(api): resolve CORS issue for production"
git commit -m "test(auth): add JWT expiry unit tests"

# GitHub ত পুশ আৰু PR সৃষ্টি
git push origin feature/jwt-auth
gh pr create --title "feat: JWT Authentication" --body "Complete auth integration"

# Rebase (পৰিষ্কাৰ ইতিহাস ৰাখিবলৈ)
git checkout feature/jwt-auth
git rebase main
\`\`\`

---

## ২২.২ GitHub Actions CI/CD (২০২৬)

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.13'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run Tests
        run: pytest --cov=app --cov-report=xml

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Build and Push Docker
        run: docker build -t codeyatra-api:latest .
\`\`\``,
    },
    {
      id: 'ch-23',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৩: Pytest আৰু টেষ্ট-ড্ৰিভন ডেভেলপমেণ্ট (TDD)',
      subtitle: 'TDD Red-Green-Refactor, Fixtures, Mocking & Property-Based Testing',
      estimatedReadTime: '8 min',
      topics: ['TDD Red-Green-Refactor', 'Pytest Fixtures', 'Mocking External APIs', 'Hypothesis Property Testing'],
      content: `## ২৩.১ TDD সোণালী চক্ৰ

1. **Red:** প্ৰথমে টেষ্ট লিখক যিটো ফেইল হয় (কাৰণ কোড নাই)।
2. **Green:** নূন্যতম কোড লিখক যাতে টেষ্টটো পাছ হয়।
3. **Refactor:** কোড পৰিষ্কাৰ আৰু অপটিমাইজ কৰক।

\`\`\`python
import pytest
from unittest.mock import patch

def যোগ(a: int, b: int) -> int:
    return a + b

def test_যোগ_মৌলিক():
    assert যোগ(2, 3) == 5
    assert যোগ(-1, 1) == 0

@pytest.fixture
def নমুনা_ব্যৱহাৰকাৰী():
    return {"নাম": "ৰিকু", "ইমেইল": "riku@test.com", "বয়স": 25}

def test_ব্যৱহাৰকাৰী_বৈধ(নমুনা_ব্যৱহাৰকাৰী):
    assert নমুনা_ব্যৱহাৰকাৰী["বয়স"] >= 18
    assert "@" in নমুনা_ব্যৱহাৰকাৰী["ইমেইল"]

# Mocking
def test_বাহ্যিক_API():
    with patch('requests.get') as mock_get:
        mock_get.return_value.json.return_value = {"status": "ok"}
        mock_get.return_value.status_code = 200
        # টেষ্ট সম্পন্ন কৰক
\`\`\``,
    },
    {
      id: 'ch-24',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৪: ডকাৰ আৰু কন্টেইনাৰাইজেশন',
      subtitle: 'Multi-stage Dockerfile, Non-root User Security & Docker Compose Full-Stack',
      estimatedReadTime: '9 min',
      topics: ['Multi-stage Dockerfile', 'Non-root Security', 'Docker Compose Multi-service', 'Docker BuildKit'],
      content: `## ২৪.১ Multi-stage Dockerfile (২০২৬ বেষ্ট প্ৰেক্টিছ)

\`\`\`dockerfile
# Builder Stage
FROM python:3.13-slim as builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Final Production Stage
FROM python:3.13-slim
WORKDIR /app

# Non-root user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser
COPY --from=builder /root/.local /home/appuser/.local
COPY . .

ENV PATH=/home/appuser/.local/bin:$PATH
USER appuser
EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8000/health || exit 1
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

---

## ২৪.২ Docker Compose (পূৰ্ণাংগ ফুলষ্টেক ষ্টেক)

\`\`\`yaml
# docker-compose.yml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/codeyatra
    depends_on:
      - db
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: codeyatra
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
\`\`\``,
    },
    {
      id: 'ch-25',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৫: এজ এআই, এনোমালি ডিটেকচন আৰু আধুনিক ট্ৰেণ্ড',
      subtitle: 'Z-Score Anomaly Detection, Scikit-Learn, SLMs, MCP & RAG Systems',
      estimatedReadTime: '10 min',
      topics: ['Z-Score Real-time Detection', 'Isolation Forest ML', 'Small Language Models (SLMs)', 'RAG & Vector Embeddings'],
      content: `## ২৫.১ Z-Score এনোমালি ডিটেকচন (IoT & Real-time)

\`\`\`python
import numpy as np
from collections import deque

class EdgeDetector:
    """IoT ডিভাইচৰ বাবে ৰিয়েল-টাইম এনোমালি ডিটেক্টৰ"""
    def __init__(self, limit=3.0, window_size=100):
        self.history = deque(maxlen=window_size)
        self.limit = limit
        
    def check(self, val: float) -> str:
        self.history.append(val)
        if len(self.history) < 10:
            return "CALIBRATING"
        mean = np.mean(self.history)
        std = np.std(self.history) + 1e-5
        z_score = abs(val - mean) / std
        return "ANOMALY" if z_score > self.limit else "NORMAL"

ed = EdgeDetector(limit=2.5)
readings = [220, 221, 219, 220, 245, 222, 218, 221, 300, 220]
for v in readings:
    print(f"ভোল্টেজ {v}V -> {ed.check(v)}")
\`\`\`

---

## ২৫.২ সৰল মেচিন লাৰ্নিং (Scikit-Learn Isolation Forest)

\`\`\`python
from sklearn.ensemble import IsolationForest
import numpy as np

# চেন্সৰ ৰিডিং ডেটা
X = np.array([
    [220], [221], [219], [220], [222],  # Normal
    [350], [10], [400]                  # Anomalies
])

clf = IsolationForest(contamination=0.2, random_state=42)
clf.fit(X)
predictions = clf.predict([[221], [380]])
# 1 = Normal, -1 = Anomaly
print("প্ৰেডিকচন (1=Normal, -1=Anomaly):", predictions)
\`\`\`

---

## ২৫.৩ ২০২৬ ৰ এআই ট্ৰেণ্ডসমূহ

- **Small Language Models (SLMs):** ডিভাইচতে অফলাইন চলিব পৰা ১B-৩B পেৰামিটাৰ মডেল।
- **Edge AI:** Raspberry Pi 5, Coral TPU ত অন-ডিভাইচ ইন্ফাৰেন্স।
- **MCP (Model Context Protocol):** এআই এজেন্ট আৰু ডাটাবেছৰ সংযোগী মানক।
- **RAG (Retrieval Augmented Generation):** ভেক্টৰ এম্বেডিঙৰ জৰিয়তে নিজা নলেজ বেচত এআই সন্ধান।`,
    },
    {
      id: 'ch-appendix',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'পৰিশিষ্ট: ৬ মহীয়া এক্সপাৰ্ট ছফ্টৱেৰ ইঞ্জিনিয়াৰ হোৱাৰ ৰোডমেপ (২০২৬)',
      subtitle: 'Month-by-Month Mastery Plan & Recommended Resources',
      estimatedReadTime: '8 min',
      topics: ['6-Month Roadmap', 'Core Foundations to System Design', 'Recommended Books & Platforms'],
      content: `## ৬ মহীয়া এক্সপাৰ্ট ছফ্টৱেৰ ইঞ্জিনিয়াৰ হোৱাৰ ৰোডমেপ

### মাহ ১: Core Foundations & DSA
- **সপ্তাহ ১-২:** কম্পিউটাৰ আৰ্কিটেকচাৰ, বাইনাৰী, মেম'ৰি মডেল
- **সপ্তাহ ৩-৪:** পাইথন গভীৰতা (Mutable/Immutable, LEGB, Closures)
- **প্ৰকল্প:** CLI টুল (টু-ডু লিষ্ট মেনেজাৰ)
- **DSA ফোকাস:** এৰে, ষ্টেক, কিউ, লিংকড লিষ্ট, BST, গ্ৰাফ BFS/DFS, Big-O বিশ্লেষণ, মাৰ্জ ছৰ্ট, কুইক ছৰ্ট

---

### মাহ ২: OOP & Clean Code
- **সপ্তাহ ১-২:** OOP স্তম্ভ (Abstract, Inheritance, Polymorphism)
- **সপ্তাহ ৩:** SOLID নীতি, Design Patterns (Strategy, Factory, Singleton)
- **সপ্তাহ ৪:** ক্লিন কোড, Refactoring, Code Review কৌশল
- **প্ৰকল্প:** বেংক মেনেজমেন্ট চিষ্টেম (OOP + SOLID)

---

### মাহ ৩: Databases & Backend
- **সপ্তাহ ১-২:** SQL, PostgreSQL, ACID, Normalization, Indexing
- **সপ্তাহ ৩:** FastAPI, Pydantic V2, RESTful API Design
- **সপ্তাহ ৪:** JWT Auth, Middleware, API Documentation
- **প্ৰকল্প:** E-commerce Backend API (Users, Products, Orders)

---

### মাহ ৪: Full-Stack & Concurrency
- **সপ্তাহ ১-২:** JavaScript ES6+, React 19, Hooks, Server Components
- **সপ্তাহ ৩:** AsyncIO, WebSockets, Redis Caching
- **সপ্তাহ ৪:** React + FastAPI Integration, CORS, State Management
- **প্ৰকল্প:** ফুলষ্টেক টাস্ক মেনেজাৰ (Realtime updates)

---

### মাহ ৫: DevOps & Systems
- **সপ্তাহ ১:** Git Advanced, GitHub Actions CI/CD
- **সপ্তাহ ২:** Docker, Docker Compose, Multi-stage builds
- **সপ্তাহ ৩:** Linux চাৰ্ভাৰ, Nginx, SSL, Deployment
- **সপ্তাহ ৪:** Monitoring (Prometheus/Grafana), Logging
- **প্ৰকল্প:** Deploy your Full-Stack app to VPS/Cloud

---

### মাহ ৬: System Design & AI
- **সপ্তাহ ১-২:** System Design Basics (Load Balancing, Caching, DB Sharding)
- **সপ্তাহ ৩:** Microservices, Message Queues (RabbitMQ/Celery)
- **সপ্তাহ ৪:** Edge AI, Anomaly Detection, RAG Basics
- **কেপষ্টন প্ৰকল্প:** AI-এনেবল্ড ডেশ্ববৰ্ড (anomaly detection + real-time alerts)

---

## অতিৰিক্ত সম্পদ (২০২৬)

### পঢ়িবলগীয়া কিতাপ:
- *"Clean Code"* — Robert C. Martin
- *"Designing Data-Intensive Applications"* — Martin Kleppmann
- *"Python Cookbook"* — David Beazley
- *"The Pragmatic Programmer"* — Andrew Hunt

### অনলাইন প্লেটফৰ্ম:
- **LeetCode:** DSA প্ৰেক্টিচ
- **HackerRank:** পাইথন, SQL প্ৰেক্টিচ
- **Frontend Masters:** React, System Design
- **AWS Free Tier:** ক্লাউড প্ৰেক্টিচ

> *"প্ৰগ্ৰামিং এটা কলা নহয়, এটা দক্ষতা—দিনে দিনে শিকিব লাগে, দিনে দিনে শুধৰাব লাগে।"*
> — কোড-যাত্ৰা মহাপুথি, ২০২৬`,
    },
  ],
};

export const SAMPLE_BOOKS: Book[] = [
  CODE_YATRA_BOOK,
  {
    id: 'ai-engineering-2026',
    title: 'The AI Engineer Handbook: From LLMs to Autonomous Agents',
    subtitle: 'Production Guide to Prompt Engineering, RAG, Fine-Tuning & Multi-Agent Systems',
    author: 'DeepMind & Cloud AI Architects',
    edition: '2026 Ultimate Edition',
    publishedYear: '2026',
    language: 'English',
    isbn: 'ISBN 978-0-13-456789-0',
    copyright: '© 2026 AI Engineering Institute. Open Knowledge Edition.',
    description: 'An authoritative manual covering architectural patterns for modern Generative AI, embeddings, vector databases, MCP protocol, and production deployment.',
    coverColor: '#1e1b4b',
    coverBadge: 'Official 2026 Edition',
    coverStyle: 'tech',
    tags: ['AI', 'LLMs', 'Gemini', 'RAG', 'Agentic AI', 'Vector DB', 'MCP'],
    createdAt: '2026-02-15T00:00:00.000Z',
    updatedAt: '2026-08-20T00:00:00.000Z',
    chapters: [
      {
        id: 'ai-ch1',
        title: 'Chapter 1: The New AI Stack in 2026',
        subtitle: 'From Static Models to Thinking Engines and Tool-Augmented Agents',
        volume: 'Part 1: Foundational Paradigms',
        estimatedReadTime: '7 min',
        topics: ['Thinking Models', 'Function Calling', 'Context Windows', 'Multimodality'],
        content: `## 1.1 The Evolution of Foundation Models

In 2026, AI architecture shifted from basic prompt-response chatbots to **Agentic Systems** that reason iteratively, invoke tools, and maintain persistent state.

### Core Tenets of the Modern Stack:
1. **Thinking Capabilities:** Multi-turn internal chain-of-thought verification before producing output.
2. **Standardized Context Protocols (MCP):** Dynamic schema discovery and remote resource binding.
3. **Hybrid Search & Grounding:** Combining dense vector retrieval with real-time web search and relational facts.

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Generating structured intelligence with tool calling
const response = await ai.models.generateContent({
  model: "gemini-3.7-flash",
  contents: "Analyze this system log and pinpoint any anomaly pattern",
});
console.log(response.text);
\`\`\``,
      },
      {
        id: 'ai-ch2',
        title: 'Chapter 2: Production-Grade RAG Architecture',
        subtitle: 'Chunking, Embeddings, Hybrid Search & Re-ranking',
        volume: 'Part 2: Knowledge Systems',
        estimatedReadTime: '8 min',
        topics: ['Semantic Chunking', 'Vector Indexing', 'Cross-Encoders', 'Evaluation'],
        content: `## 2.1 Why Naive RAG Fails in Enterprise

Traditional top-k vector cosine similarity struggles with tabular data, negation, and temporal queries. Production RAG requires:
- **Hierarchical Chunking:** Preserving document parent headers and tables.
- **Hybrid Retrieval:** BM25 lexical search + dense embeddings.
- **Cross-Encoder Re-ranking:** Re-ordering the top 50 candidates down to the top 5 most relevant passages.`,
      },
    ],
  },
  {
    id: 'hindi-python-masterclass',
    title: 'पायथन एवं सॉफ्टवेयर इंजीनियरिंग सम्पूर्ण मार्गदर्शिका',
    subtitle: 'शून्य से एडवांस्ड डेवलपर बनने की संपूर्ण यात्रा — २०२६ संस्करण',
    author: 'भारत टेक कम्युनिटी',
    edition: '२०२६ हिंदी संस्करण',
    publishedYear: '2026',
    language: 'हिन्दी (Hindi)',
    isbn: 'ISBN 978-81-923456-7-8',
    copyright: '© २०२६ सर्वाधिकार सुरक्षित। ओपन सोर्स और मुफ्त शिक्षा के लिए समर्पित।',
    description: 'सरल हिंदी भाषा में कंप्यूटर साइंस, पायथन प्रोग्रामिंग, डेटा स्ट्रक्चर्स, वेब डेवलपमेंट और क्लाउड डेवऑप्स का संपूर्ण ज्ञान।',
    coverColor: '#831843',
    coverBadge: 'हिंदी मास्टरक्लास २०२६',
    coverStyle: 'royal',
    tags: ['Python', 'DSA', 'FastAPI', 'Backend', 'DevOps', 'Hindi Guide'],
    createdAt: '2026-03-01T00:00:00.000Z',
    updatedAt: '2026-08-25T00:00:00.000Z',
    chapters: [
      {
        id: 'hi-ch1',
        title: 'अध्याय १: पायथन का परिचय और कंप्यूटर फंडामेंटल्स',
        subtitle: 'कंप्यूटर कैसे सोचता है और पायथन इतना लोकप्रिय क्यों है?',
        volume: 'भाग १: बुनियादी सिद्धांत',
        estimatedReadTime: '6 min',
        topics: ['Memory & CPU', 'Python Syntax', 'Variables & Data Types'],
        content: `## १.१ पायथन क्या है और यह क्यों खास है?

पायथन एक उच्च-स्तरीय (High-level), इंटरप्रिटेड प्रोग्रामिंग भाषा है जिसे पढ़ना और लिखना अंग्रेजी की तरह बहुत आसान है।

\`\`\`python
# पहला पायथन प्रोग्राम
def स्वागत(नाम: str):
    print(f"नमस्ते {नाम}! कोडिंग की रोमांचक दुनिया में आपका स्वागत है।")

स्वागत("विकास")
\`\`\`

### मुख्य विशेषताएं:
- **सरल सिंटेक्स:** शुरुआती लोगों के लिए सबसे आसान।
- **विशाल लाइब्रेरी इकोसिस्टम:** AI, वेब डेवलपमेंट, डेटा साइंस के लिए समृद्ध लाइब्रेरी।
- **क्रॉस-प्लेटफ़ॉर्म:** विंडोज, मैक, लिनक्स सभी पर सुचारू रूप से चलता है।`,
      },
    ],
  },
];
